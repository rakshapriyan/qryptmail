from fastapi import FastAPI,  HTTPException
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from imap_final import get_emails
from login import verify_gmail_credentials
from typing import List
from imap_final import EmailRequest
from smtp import send_mail_level1, send_mail_level2

email= ''
pwd = ''


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class SendEMail(BaseModel):
    email : str
    password : str
    receiver: EmailStr
    subject: str
    body: str
    security: str

class EmailModel(BaseModel):
    id: int
    from_: str
    subject: str
    time: str
    to: str
    security: str
    emailExcerpt: str
    emailContent: str
    unread: bool
    checked: bool
    starred: bool
    important: bool
    inbox: bool
    sent: bool
    draft: bool
    spam: bool
    trash: bool
    label: str



class UserCredentials(BaseModel):
    email: EmailStr
    password: str

# LOGIN USING THE MAIL ID AND APP PASSWORD

@app.post("/login", status_code=200)
async def verify_credentials(credentials: UserCredentials):

    if verify_gmail_credentials(credentials.email, credentials.password):
        global email
        email = credentials.email
        global pwd
        pwd = credentials.password
        return {"message": "Valid email and password"}
    else:
        return {"message": "Invalid email or password"}
    

# SEND MAIL USING THE MAIL ID AND APP PASSWORD

@app.post("/sendmail")
def send_mail(sendemail: SendEMail):
    if sendemail.security == 'level1':
        return send_mail_level1(sendemail)
    elif sendemail.security == 'level2':
        return send_mail_level2(sendemail)
    else:
        return {"message": "Invalid security level"}


# GET EMAILS USING THE MAIL ID AND APP PASSWORD

@app.get("/emails", response_model=List[EmailModel])
async def read_emails(email: EmailStr, password: str):
    try:
        return get_emails(email, password)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


