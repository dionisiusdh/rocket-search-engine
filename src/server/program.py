try:
    from os import listdir
    from os.path import isfile, join
    from document import document, get_tokens
    from vector import vectorize, sim
except:
    print("Mohon install requirements terlebih dahulu.")
    print("pip install -r requirements.txt")

def query_sim(q):
    # Mencari similarity dari query dari kumpulan dokumen yang ada di folder test
    # Output hasil query yang telah terurut berdasarkan value dalam bentuk dictionary

    # Cek nama file yang ada dalam folder test
    all_files = [f[:len(f)-4] for f in listdir("../../test") if isfile(join("../../test", f))]

    # Read file
    docs = []

    for file in all_files:
        path = "../../test/" + file + ".txt"
        f = open(path, "r")
        docs.append(f.read())

    docs.append(q)

    # Tokenisasi
    tokens = get_tokens(docs)

    # Vectorize token
    vs = vectorize(tokens)
    tokq = vs.pop(len(vs)-1)
    res = dict()

    # Perhitungan similarity
    for i in range(len(vs)):
        res[all_files[i]] = sim(tokq, vs[i])

    res = sort_dict(res)
    res = make_json(res)

    return res

def sort_dict(dictionary):
    # Sorting sebuah dictionary berdasarkan value
    dictionary = {k: v for k, v in sorted(dictionary.items(), key=lambda item: item[1], reverse=True)}
    return dictionary

def make_json(dictionary):
    # Membuat dictionary menjadi berformat json
    res = dict()
    counter = 1

    for k, v in dictionary.items():
        key = "data_" + str(counter)
        res[key] = {"title":k, "sim":v}
        counter += 1

    return res
