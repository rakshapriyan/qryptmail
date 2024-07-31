from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
import imaplib
import email
from email.header import decode_header
from aes import decrypt
from key_store_database import fetch_value_by_name

app = FastAPI()

# CORS policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to the specific domains you want to allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailRequest(BaseModel):
    email: str
    password: str

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

def decode_mime_words(s):
    return ''.join(
        word.decode(charset or 'utf-8') if isinstance(word, bytes) else word
        for word, charset in decode_header(s)
    )

def format_time(date_str: str) -> str:
    # Convert IMAP date format to a human-readable time string
    date = email.utils.parsedate_to_datetime(date_str)
    return date.strftime("%I:%M %p")

def get_emails(user: str, password: str) -> List[EmailModel]:
    imap_url = 'imap.gmail.com'
    mail = imaplib.IMAP4_SSL(imap_url)
    mail.login(user, password)
    mail.select('inbox')

    emails = []

    status, messages = mail.search(None, 'ALL')
    if status != 'OK':
        raise HTTPException(status_code=500, detail="Failed to fetch emails")

    email_ids = messages[0].split()
    email_ids = email_ids[-20:]  # Get the latest 20 emails

    for idx, e_id in enumerate(email_ids):
        status, msg_data = mail.fetch(e_id, '(RFC822)')
        if status != 'OK':
            raise HTTPException(status_code=500, detail=f"Failed to fetch email with ID {e_id}")

        msg = email.message_from_bytes(msg_data[0][1])

        subject = decode_mime_words(msg['subject']) if msg['subject'] else ""
        from_ = decode_mime_words(msg['from']) if msg['from'] else ""
        to = decode_mime_words(msg['to']) if msg['to'] else ""
        date = format_time(msg['date']) if msg['date'] else ""
        security = msg['security-method'] if msg['security-method'] else ""
        body = ""
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == "text/plain" and part.get('Content-Disposition') is None:
                    body = part.get_payload(decode=True).decode(part.get_content_charset() or 'utf-8')
                    break
        else:
            body = msg.get_payload(decode=True).decode(msg.get_content_charset() or 'utf-8')

        if security == "level2":
            user1 = user.split('@')[0]
            user2 = to.split('@')[0]
            name1 = user1 + user2
            name2 = user2 + user1
  
            key, iv = fetch_value_by_name(name1)
            if key is None or iv is None:
                key, iv = fetch_value_by_name(name2)
                if key is None or iv is None:
                    raise ValueError(f"Key and IV should not be None for {name1} or {name2}")
            body = decrypt(body, key, iv)
            subject = decrypt(subject, key, iv)

        email_excerpt = body[:50] + '...'

        email_item = EmailModel(
            id=idx + 1,
            from_=from_,
            subject=subject,
            time=date,
            to=to,
            security=security,
            emailExcerpt=email_excerpt,
            emailContent=body,
            unread=True,
            checked=False,
            starred=True,
            important=False,
            inbox=True,
            sent=False,
            draft=False,
            spam=False,
            trash=False,
            label='Primary'
        )
        emails.append(email_item)

    mail.logout()
    return emails

@app.get("/emails", response_model=List[EmailModel])
async def read_emails(email: EmailStr, password: str):
    try:
        return get_emails(email, password)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
