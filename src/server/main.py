from flask import Flask, redirect, flash, render_template, url_for, json, jsonify, request, send_from_directory
import os
from program import query_sim

app = Flask(__name__)
app.secret_key = "abcdefg"

def json_response(response, status=200):
 return (json.dumps(response), status, {'content-type': 'application/json'})

# ====================== HANDLING QUERY ====================== 
@app.route('/result/<query>', methods=["GET"])
def result(query):
    # Mereturn hasil perhitungan similarity terhadap dokumen yang ada berdasarkan query
    return jsonify(query_sim(query))

@app.route('/post', methods=["POST"])
def post():
    # Menerima input query dari user dan meredirect ke result/<query>
    q = request.form["que"]
    return redirect(url_for("result", query=q))

# ====================== FILE UPLOAD ====================== 
UPLOAD_FOLDER = '../../test/upload'
ALLOWED_EXTENSIONS = {'txt', 'html'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=["GET", "POST"])
def upload_file():
    if request.method == 'POST':
        files = request.files.getlist("file")
        
        for file in files:
            filename = file.filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
        return """
        File berhasil di upload.
        <a href="/upload">Kembali</a>
        """

    return json_response({'res':'Pastikan file anda benar'})

@app.route('/upload/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)

""" 
STATIC
@app.route('/query', methods=["POST"])
def get_query_sim():
    query = request.form["quer"]
    # return jsonify(query_sim(query))
    return redirect(url_for("query_result", que=query))


@app.route('/<que>')
def query_result(que):
    #return jsonify(query_sim(que))
    res = query_sim(que)
    return render_template("query_result.html", content=res)
"""

if __name__ == "__main__":
    app.run(debug=True)