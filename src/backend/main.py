try:
    from os import listdir
    from os.path import isfile, join
    from document import document, get_tokens
    from vector import vectorize, sim
except:
    print("Mohon install requirements terlebih dahulu.")
    print("pip install -r requirements.txt")

docs = []

all_files = [f[:len(f)-4] for f in listdir("./test") if isfile(join("./test", f))]

for file in all_files:
    path = "./test/" + file + ".txt"
    f = open(path, "r")
    docs.append(f.read())

q = str(input("Masukkan query anda: "))

docs.append(q)

tokens = get_tokens(docs)

vs = vectorize(tokens)
tokq = vs.pop(len(vs)-1)

for i in range(len(vs)):
    print(f"{all_files[i]}, Sim: ", end="")
    print(sim(tokq, vs[i]))