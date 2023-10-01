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

def recipe_id(hits):
    recipeids = recipe_data['id']
    re_li = []
    for i in range(0, len(hits)):
        if(hits[i] != 0):
            re_li.append((hits[i], recipeids[i]))
            re_li.sort()
            return re_li

#access userdata
def getPref(userID):
    pref=client['slaytur']['users'].find({"id" : userID})
    return pref

def giveRecipe(userID):
    return recipe_id(filrec(getPref(userID)))

#request handler
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.end_headers()
        pref = []
        pref.append(self.headers['userid'])
        pref.append(self.headers['query'])
        print(json.dumps(giveRecipe(pref)))
httpd = HTTPServer(('', 9036), SimpleHTTPRequestHandler)
httpd.serve_forever()

