import mysql.connector

# Establish a connection to the MySQL database
db = mysql.connector.connect(
    host="localhost",       # Replace with your database host
    user="root",            # Replace with your database user
    password="root",        # Replace with your database password
    database="qumail"       # Replace with your database name
)

# Create a cursor object
cursor = db.cursor()

# SQL statement to create the table if it does not exist
create_table_query = """
CREATE TABLE IF NOT EXISTS key_storage (
    name VARCHAR(255) PRIMARY KEY,
    `key` BLOB,
    initial_vector BLOB
)
"""
# Execute the create table query
cursor.execute(create_table_query)

# Function to insert values into the table
def insert_value(name, key, initial_vector):
    insert_query = "INSERT INTO key_storage (name, `key`, initial_vector) VALUES (%s, %s, %s)"
    cursor.execute(insert_query, (name, key, initial_vector))
    db.commit()  # Commit the transaction

# Function to fetch values by name
def fetch_value_by_name(name):
    fetch_query = "SELECT `key`, initial_vector FROM key_storage WHERE name = %s"
    cursor.execute(fetch_query, (name,))
    result = cursor.fetchone()
    
    if result:
        key, initial_vector = result
        return key, initial_vector
    else:
        return None, None