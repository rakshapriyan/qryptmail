from fastapi import FastAPI
from email.message import EmailMessage
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from aes import encrypt
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from Crypto.Random import get_random_bytes
from Crypto.Cipher import AES
from key_store_database import insert_value, fetch_value_by_name

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Creds(BaseModel):
    mail: EmailStr
    pwd: str


# @app.post("/get-creds")
# def get_creds(creds: Creds):
#     global email, pwd
#     email = creds.mail
#     pwd = creds.pwd


class SendEMail(BaseModel):
    email : str
    password : str
    receiver: EmailStr
    subject: str
    body: str
    security: str


@app.post("/sendmail")
def send_mail(sendemail: SendEMail):
    if sendemail.security == 'level1':
        return send_mail_level1(sendemail)
    elif sendemail.security == 'level2':
        return send_mail_level2(sendemail)
    else:
        return {"message": "Invalid security level"}


def send_mail_level1(sendemail):
    message = MIMEMultipart()
    email = sendemail.email
    pwd = sendemail.password
    message["From"] = email
    message["To"] = sendemail.receiver
    message["Subject"] = sendemail.subject
    message['security-method'] = "level1"

    message.attach(MIMEText(sendemail.body, "plain"))

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(email, pwd)
        server.sendmail(email, sendemail.receiver, message.as_string())

    return {"message": "Email sent with level1 security"}


def send_mail_level2(sendemail):
    email = sendemail.email
    pwd = sendemail.password
    user1 = email.split('@')[0]
    user2 = sendemail.receiver.split('@')[0]
    name1 = user1 + user2
    name2 = user2 + user1
    
    key, iv = fetch_value_by_name(name1)
    
    if key is None or iv is None:
        key, iv = fetch_value_by_name(name2)
        if key is None or iv is None:
            key = get_random_bytes(16)
            iv = get_random_bytes(AES.block_size)
            insert_value(name1, key, iv)  # Store key and iv as binary
    else:
        if key is None or iv is None:
            raise ValueError(f"Key and IV should not be None for {name1} or {name2}")

    print("Key:", key)
    print("IV:", iv)
    
    subject_bytes = encrypt(sendemail.subject, key, iv)
    body_bytes = encrypt(sendemail.body, key, iv)

    subject_encoded = subject_bytes
    body_encoded = body_bytes

    msg = EmailMessage()
    msg["From"] = email
    msg["To"] = sendemail.receiver
    msg["Subject"] = subject_encoded
    msg['Commrad-enc'] = "True"
    msg['security-method'] = "level2"
    msg.set_content(body_encoded)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(email, pwd)
        smtp.send_message(msg)

    return {"message": "Email sent with level2 security"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)