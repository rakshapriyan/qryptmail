from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
import imaplib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # List of origins that are allowed to make requests
    allow_credentials=True,  # Allow cookies to be included in cross-origin requests
    allow_methods=["*"],  # List of HTTP methods that are allowed
    allow_headers=["*"],  # List of HTTP headers that are allowed
)

class UserCredentials(BaseModel):
    email: EmailStr
    password: str

def verify_gmail_credentials(email: str, password: str) -> bool:
    try:
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login(email, password)
        mail.logout()
        return True
    except imaplib.IMAP4.error:
        return False

@app.post("/login", status_code=200)
async def verify_credentials(credentials: UserCredentials):
    if verify_gmail_credentials(credentials.email, credentials.password):
        return {"message": "Valid email and password"}
    else:
        raise HTTPException(status_code=401, detail="Invalid email or password")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
