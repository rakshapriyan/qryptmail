import os

def generate_key(length):
    """Generate a random key of the specified length."""
    return os.urandom(length)

def encrypt(message, key):
    """Encrypt the message with the given key using a one-time pad."""
    if len(key) < len(message):
        raise ValueError("Key must be at least as long as the message")
    return bytes([m ^ k for m, k in zip(message, key)])

# Example usage
message = b"Hello, World!"
key = generate_key(len(message))
ciphertext = encrypt(message, key)

print("Message:   ", message)
print("Key:       ", key)
print("Ciphertext:", ciphertext)


def decrypt(ciphertext, key):
    """Decrypt the ciphertext with the given key using a one-time pad."""
    return bytes([c ^ k for c, k in zip(ciphertext, key)])

# Example usage
decrypted_message = decrypt(ciphertext, key)

print("Decrypted Message:", decrypted_message)
