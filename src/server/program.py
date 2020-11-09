try:
    from os import listdir
    from os.path import isfile, join
    from document import document, get_tokens, get_first_sentence, get_num_words, get_table_html, get_table
    from vector import vectorize, sim
    from reader import get_files, read_txt
except:
    print("Mohon install requirements terlebih dahulu.")
    print("pip install -r requirements.txt")

def query_sim(q):
    # Mencari similarity dari query dari kumpulan dokumen yang ada di folder test
    # Output hasil query yang telah terurut berdasarkan value dalam bentuk dictionary

    # Cek nama file yang ada dalam folder test (path relative terhadap folder server)
    DOCUMENT_PATH = "../../test/upload/"

    all_files = get_files(DOCUMENT_PATH)

    # Read file
    docs = []

    for file in all_files:
        path = DOCUMENT_PATH + file + ".txt"
        f = read_txt(path)
        docs.append(f)
        #f = open(path, "r")
        #docs.append(f.read())

    docs.append(q)

    # Tokenisasi
    tokens = get_tokens(docs)

    # Kalimat pertama
    first_sentence = get_first_sentence(all_files, docs[:len(docs)-1])
    num_words = get_num_words(all_files, docs[:len(docs)-1])

    # Vectorize token
    vs = vectorize(tokens)
    tokq = vs.pop(len(vs)-1)
    res = dict()

    # Perhitungan similarity
    for i in range(len(vs)):
        res[all_files[i]] = sim(tokq, vs[i])

    res = sort_dict(res)
    res = make_json(res, first_sentence, num_words)

    return res

def term_frequency_table(q, html=False):
    # Menghasilkan term_frequency_table dari query terhadap dokumen yang ada dalam format HTML

    # Cek nama file yang ada dalam folder test (path relative terhadap folder server)
    DOCUMENT_PATH = "../../test/upload/"

    # all_files = get_files(DOCUMENT_PATH)
    all_files = []
    query_result = query_sim(q)
    
    for result in query_result:
        all_files.append(result['title'])

    # Read file
    docs = []

    for file in all_files:
        path = DOCUMENT_PATH + file + ".txt"
        f = read_txt(path)
        docs.append(f)

    docs.append(q)

    if html:
        return get_table_html(get_table(all_files, ([docs[len(docs)-1]] + docs[:len(docs)-1])))
    
    return get_table(all_files, ([docs[len(docs)-1]] + docs[:len(docs)-1]))

def sort_dict(dictionary):
    # Sorting sebuah dictionary berdasarkan value
    dictionary = {k: v for k, v in sorted(dictionary.items(), key=lambda item: item[1], reverse=True)}
    return dictionary

def make_json(dictionary, first_sentence, num_words):
    # Membuat dictionary menjadi berformat json
    # Mereturn hasil dalam bentuk
    # [ {'title' : ... , 
    #    'sim': ..., 
    #    'first_sentence':...}
    #   , ...
    # ]

    res = []

    for k, v in dictionary.items():
        res.append({"title":k, "sim":v, "first_sentence":first_sentence[k], "num_words":num_words[k]})

    return res