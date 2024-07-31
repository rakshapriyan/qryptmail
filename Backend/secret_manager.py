import boto3
import uuid
import json

# Initialize the Secrets Manager client
client = boto3.client('secretsmanager')

def create_and_store_api_key(secret_name, description="API Key"):
    # Generate a new API key
    api_key = str(uuid.uuid4())
    
    # Create the secret in Secrets Manager
    response = client.create_secret(
        Name=secret_name,
        Description=description,
        SecretString=json.dumps({"api_key": api_key})
    )
    
    return response

def retrieve_api_key(secret_name):
    response = client.get_secret_value(
        SecretId=secret_name
    )
    
    secret = json.loads(response['SecretString'])
    return secret['api_key']

def delete_api_key(secret_name):
    response = client.delete_secret(
        SecretId=secret_name,
        ForceDeleteWithoutRecovery=True  # Use with caution: this permanently deletes the secret
    )
    
    return response

# Example usage
secret_name = "my_api_key_secret"

# Create and store API key
create_response = create_and_store_api_key(secret_name)
print("Create Response:", create_response)

# Retrieve API key
api_key = retrieve_api_key(secret_name)
print("Retrieved API Key:", api_key)

# Delete API key
delete_response = delete_api_key(secret_name)
print("Delete Response:", delete_response)
