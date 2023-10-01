from flashtext import KeywordProcessor
from http.server import BaseHTTPRequestHandler, HTTPServer
from dotenv import load_dotenv
import pandas as pd
import json
import os

load_dotenv()

# filrecalg
recipe_data = pd.read_csv("./dataset/RAW_recipes.csv")
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

    for i in range(0, min(len(hits), 10)):
        if(hits[i] != 0):
            re_li.append((hits[i], recipeids[i]))
            re_li.sort(reverse=True)

    return [str(x[1]) for x in re_li]


def giveRecipe(pref):
    return recipe_id(filrec(pref))

# HTTP server
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()

        pref = self.headers['query'].split(";")
        self.wfile.write(json.dumps({ "result": ",".join(giveRecipe(pref)) }).encode("utf-8"))

httpd = HTTPServer(('', 9036), SimpleHTTPRequestHandler)
httpd.serve_forever()
