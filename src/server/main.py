from flask import Flask, redirect, flash, render_template, url_for, json, jsonify, request, send_from_directory
import os
from program import query_sim, term_frequency_table
from reader import read_txt

app = Flask(__name__)
app.secret_key = "abcdefg"

def json_response(response, status=200):
 return (json.dumps(response), status, {'content-type': 'application/json'})

# ====================== HANDLING QUERY ====================== 
@app.route('/result/<query>', methods=["GET"])
def result(query):
    # Mereturn hasil perhitungan similarity terhadap dokumen yang ada berdasarkan query
    return jsonify(query_sim(query))

@app.route('/tf-table/<query>', methods=["GET"])
def tf_table(query):
    return jsonify(term_frequency_table(query, False))

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
            
        return success

    return json_response({'res':'Pastikan file anda benar'})

@app.route('/show/<filename>', methods=["GET"])
def uploaded_file(filename):
    return jsonify(
        {'title':filename[:len(filename)-4],
        'text':read_txt(UPLOAD_FOLDER + '/' + filename)
        }
        );
    #return send_from_directory(app.config['UPLOAD_FOLDER'],
    #                           filename)

# ===================== HTML =====================

success = """
        <div style="color:blue; 
                    align-items: center; 
                    display:flex; 
                    flex-direction:column;
                    background-color: #133A49;
                    width: 100%;
                    height: 100%">
            <img style="margin-top: 5%;"
                src="favicon.ico"/>
            <h1 style="font-family: 'Calibri';
                        color: #4885ed;
                        font-size:50px;
                        margin-top: 3%;"
                        >
                    File berhasil di upload.</h1>
            <a  href="/upload" 
                style="font-family: 'Calibri';
                font-size:25px;
                color: black;">
                    Kembali</a>
        </div>
        """

if __name__ == "__main__":
    app.run(debug=True)