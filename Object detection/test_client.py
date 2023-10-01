import requests

# Define the server's address.
server_address = "http://localhost:8080/objectdetect"  # Replace with your server's address.

# Define the path to the image file you want to send.
image_file = "Object detection\image.jpg"  # Replace with the actual image file path.

# Open and read the image file.
with open(image_file, "rb") as file:
    image_data = file.read()

# Define the 'userid' value you want to send.
userid = "12345"  # Replace with the actual 'userid' value you want to use.

# Set the headers for the POST request.
headers = {"Content-Type": "image/jpg"}  # Adjust the content type based on your image format.

# Include 'userid' as a query parameter in the URL.
server_address_with_query = f"{server_address}?userid={userid}"

# Send the POST request to the server.
response = requests.post(server_address_with_query, data=image_data, headers=headers)

# Check the response from the server.
if response.status_code == 200:
    print("Image successfully sent to the server.")
    print("Server response:", response.text)
else:
    print("Failed to send image to the server. Status code:", response.status_code)
