# AES Encryption and Decryption functions
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64

from fastapi import HTTPException

def validate_key_length(key):
    if key is None:
        raise ValueError("Key cannot be None")
    if len(key) not in {16, 24, 32}:
        raise ValueError(f"Invalid AES key length ({len(key)} bytes). Key must be 16, 24, or 32 bytes long.")

def encrypt(plaintext: str, key: bytes, iv: bytes) -> str:
    # Create the AES cipher object
    cipher = AES.new(key, AES.MODE_CBC, iv)
    
    # Pad the plaintext to be a multiple of the block size
    padded_plaintext = pad(plaintext.encode('utf-8'), AES.block_size)
    
    # Encrypt the padded plaintext
    encrypted = cipher.encrypt(padded_plaintext)
    
    # Encode the encrypted bytes to base64 to store or transmit
    return base64.b64encode(encrypted).decode('utf-8')


def decrypt(ciphertext: str, key: bytes, iv: bytes) -> str:
    try:
        # Decode the base64 encoded ciphertext
        decoded_ciphertext = base64.b64decode(ciphertext)
        
        # Create the AES cipher object
        cipher = AES.new(key, AES.MODE_CBC, iv)
        
        # Decrypt and unpad the ciphertext
        decrypted_padded = cipher.decrypt(decoded_ciphertext)
        decrypted = unpad(decrypted_padded, AES.block_size)
        
        return decrypted.decode('utf-8')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Decryption failed: {str(e)}")
