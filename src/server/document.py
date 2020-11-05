# =============================================================
# Module document.py
# =============================================================
# Berisi semua hal yang berkaitan dengan dokumen
# Kelas document, preprocessing document, dan menghasilkan token dari sekumpulan dokumen

# Importing Libraries
try:
    import nltk    
    import re
    from nltk.corpus import stopwords 
    from nltk.tokenize import word_tokenize 
    from nltk.stem import PorterStemmer
    from vector import term_frequency
except:  
    print("Mohon install requirements terlebih dahulu.")
    print("pip install -r requirements.txt")

try:
    stop_words = set(stopwords.words('english'))
except:
    nltk.download('stopwords')
    nltk.download('punkt')

class document():
    def __init__(self, text):
        self.text = text
        self.tokens = None
        self.num_words = len(text.split())
        self.first_sentence = text.split('.')[0]

    def preprocess(self):
        # Preprocessing text dengan menghapus stopwords dan stemming
        text = self.text.lower()    # Lowercasing
        text = re.sub('((www\.[^\s]+)|(https?://[^\s]+)|(http?://[^\s]+))',' ',text) # Menghapus URL
        text = re.sub('\n',' ',text)    # Menghapus newline \n
        text = re.sub('[^0-9a-zA-Z]+', ' ', text)   # Menghapus karakter alphanumerik

        tokens = word_tokenize(text) # Tokenize words

        # Removing stopwords and Stemming
        stop_words = set(stopwords.words('english'))
        stemmer = PorterStemmer()

        res = [stemmer.stem(w.lower()) for w in tokens if not w in stop_words]

        self.tokens = res

def get_tokens(documents):
    # Melakukan preprocessing dan menghasilkan token dari sekumpulan dokumen
    tokens = []

    for doc in documents:
        t = document(doc)
        t.preprocess()
        tokens.append(t.tokens)
    
    return tokens

def get_first_sentence(titles, documents):
    # Melakukan preprocessing dan menghasilkan kalimat pertama dari sekumpulan dokumen
    fsentence = dict()
    i = 0

    for doc in documents:
        t = document(doc)
        t.preprocess()
        fsentence[titles[i]] = t.first_sentence
        i += 1
    
    return fsentence

def get_num_words(titles, documents):
   # Melakukan preprocessing dan menghasilkan jumlah kata dari sekumpulan dokumen
    num_words = dict()
    i = 0

    for doc in documents:
        t = document(doc)
        t.preprocess()
        num_words[titles[i]] = t.num_words
        i += 1
    
    return num_words

def get_table(title, documents):
    # Menghasilkan tabel perhitungan kata dalam format .json
    # [
    #   {
    #       "Term": ...,
    #       "Query": ...,
    #       "D1":...,
    #       ...
    #   }
    # ]
    table = []
    tf = term_frequency(get_tokens(documents))
    terms = list(tf[0].keys())

    for term in terms:
        m = dict()
        m['Term'] = term

        for i in range(len(documents)):
            if i == 0:
                key = 'Query'
            else:
                key = 'D' + str(i)
            m[key] = tf[i][term]
        
        table.append(m)
        
    return table

def get_table_html(table):
    # Menghasilkan format HTML dari tabel
    # get_table_html(get_table(all_files, ([docs[len(docs)-1]] + docs[:len(docs)-1])))
    res = ""
    res += "<table><tr>"
    #res += "<table border==\"1\"><tr>"

    for key in list(table[0].keys()):
        res += '<td>' + str(key) + '</td>'

    res += "</tr>"

    for i in range(len(table)):
        res += "<tr>"
        keys = list(table[i].keys())

        for key in keys:
            res += '<td>' + str(table[i][key]) + '</td>'

        res += "</tr>"

    res += "</table>"

    return res