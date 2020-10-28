from flask import Flask
from program import query_sim
import time

app = Flask("__main__")

@app.route('/time')
def get_current_time():
    return {'time': time.time(),'message':"test123"}

@app.route('/query')
def get_query_sim(q="Sea"):
    return query_sim(q)