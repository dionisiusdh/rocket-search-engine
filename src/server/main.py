from flask import Flask, redirect, render_template, url_for, jsonify, request
from program import query_sim

app = Flask(__name__)

@app.route('/query', methods=["POST"])
def get_query_sim():
    query = request.form["que"]
    # return jsonify(query_sim(query))
    return redirect(url_for("query_result", que=query))

@app.route('/<que>')
def query_result(que):
    #return jsonify(query_sim(que))
    res = query_sim(que)
    return render_template("query_result.html", content=res)

if __name__ == "__main__":
    app.run(debug=True)