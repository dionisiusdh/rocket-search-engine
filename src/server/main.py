from flask import Flask, redirect, url_for, jsonify, request
from program import query_sim
import time

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time(),'message':"test123"}

@app.route('/query')
def get_query_sim(q="Sea"):
    return jsonify(query_sim(q))

"""
@app.route('/query', methods=["GET"])
def get_query_sim():
    query = request.form["que"]
    return query_sim(query)"""

if __name__ == "__main__":
    app.run(debug=True)