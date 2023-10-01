from flashtext import KeywordProcessor
from http.server import BaseHTTPRequestHandler, HTTPServer
from pymongo import MongoClient
from dotenv import load_dotenv
import pandas as pd
import json
import os

load_dotenv()

#connect to db
client = MongoClient(os.getenv('MONGO_URI')) 

#filrecalg
recipe_data = pd.read_csv("FilRec\dataset\RAW_recipes.csv")
ingredients = recipe_data['ingredients']
tags= recipe_data['tags']
def filrec(pref):
    kp = KeywordProcessor()
    for i in pref:
        kp.add_keyword(i)
    hits = []
    for i in range(0, len(ingredients)):
         hits.append(len(kp.extract_keywords(ingredients[i])) + len(kp.extract_keywords(tags[i])))
    return hits

#access userdata
def getPref(userID):
    pref=client['alma']['users'].find({"id" : userID})
    return pref

def giveRecipe(userID):
    return filrec(getPref(userID))

#request handler
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.end_headers()
        print(json.dumps(giveRecipe(self.headers['userid'])))
httpd = HTTPServer(('', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()

