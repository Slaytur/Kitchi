from http.server import SimpleHTTPRequestHandler, HTTPServer
import tensorflow as tf
from PIL import Image
import io
import numpy as np
import urllib.parse
import json

host = "localhost"
port = 9035

class MyHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        self.model = tf.keras.saving.load_model("Object detection\kitchiAI")
        self.classes = ["apple","avocado","bacon","banana","basil","beans","bread_crumbs","bruh.js","butter","cabbage","carrots","celery","cheddar_cheese","chicken_breasts","chicken_broth","chocolate_chips","cream_cheese","cucumber","eggs","flour","ginger","green_onions","ground_beef","honey","lemon","lettuces","lime","milk","monzzerella","mushroom","oil","onion","orange","orange_juice","parsley","peanut_butter","potato","rasins","sour_cream","sugar","tomato","tomato_sauce","vinegar","zucchini"]
        SimpleHTTPRequestHandler.__init__(self, *args, **kwargs)
        
    def process_images(self, binary_image_data):
        image = Image.open(io.BytesIO(binary_image_data))
        image_data = np.array(image)
        
        print(image_data.shape)
        
        desired_shape = (256, 256)
        image_data = tf.image.resize(image_data, size=desired_shape)
        image_data = np.expand_dims(image_data, axis=0)
        # print(image_data)
        print(image_data.shape)
        
        results = self.model.predict(image_data)

        # Apply softmax activation
        classification_result = tf.nn.softmax(results)

        # Get the class with the highest probability
        predicted_class = tf.argmax(classification_result, axis=-1).numpy()
        
        if results[0][int(predicted_class)]>0.005:
            return [self.classes[int(predicted_class)]]

        return []
        
    def do_POST(self):
        if "/objectdetect" in self.path:
            content_length = int(self.headers['Content-Length'])
            image_data = self.rfile.read(content_length)

            # Parse the query parameters to get the 'userid' value
            query_params = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            userid = query_params.get('userid', [''])[0]
            print(userid)

            returned_data = self.process_images(image_data)

            self.send_response(200)
            self.send_header("Content-type", "text/plain")

            # Include 'userid' in the response
            response_data = {
                "userid": userid,
                "result": ",".join(returned_data)
            }

            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"404 Not Found")


            


if __name__ == "__main__":
    server_address = (host, port)
    httpd = HTTPServer(server_address, MyHandler)
    print(f"Server started http://{host}:{port}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

    httpd.server_close()
    print("Server stopped.")
