import requests

# Define the server's address.
server_address = "http://localhost:8080/objectdetect"  # Replace with your server's address.

# Define the path to the image file you want to send.
image_file = "Object detection\image.jpg"  # Replace with the actual image file path.

# Open and read the image file.
with open(image_file, "rb") as file:
    image_data = file.read()

# Set the headers for the POST request.
headers = {"Content-Type": "image/jpg"}  # Adjust the content type based on your image format.

# Send the POST request to the server.
response = requests.post(server_address, data=image_data, headers=headers)

# Check the response from the server.
if response.status_code == 200:
    print("Image successfully sent to the server.")
    print("Server response:", response.text)
else:
    print("Failed to send image to the server. Status code:", response.status_code)
