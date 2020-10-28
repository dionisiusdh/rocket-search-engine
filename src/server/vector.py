# =============================================================
# Module vector.py
# =============================================================
# Berisi semua hal yang berkaitan dengan vektor
# Operasi vektor, menghitung magnitude, dot product, cosine similarity, dan mekonversi token kata menjadi vektor

def vectorize(tokens):
    # Membuat vektor token kata dokumen dari sekumpulan token kata dokumen
    # Mengambil seluruh kata-kata yang ada dalam kumpulan dokumen
    words = []
    
    for tok in tokens:
        words += tok
    
    words = set(words)
    res = []

    # Membuat vektor untuk masing-masing dokumen
    for tok in tokens:
        vector = []
        m = dict()

        for word in words:
            m[word] = 0

        for word in tok:
            m[word] += 1
    
        for key, value in m.items():
            vector.append(value)

        res.append(vector)
    
    return res

def dot(a, b):
    # Melakukan dot product pada vektor a dan b
    # Prasyarat: Ukuran a dan b harus sama
    res = 0

    for i in range(len(a)):
        res += a[i]*b[i]
    
    return res

def magnitude(a):
    # Mencari besar / magnitudo vektor a
    total = 0
    
    for el in a:
        total += (el)**2
    
    return (total)**(1/2)

def sim(a, b):
    # Mencari nilai cosine similarity dari vektor a dan b
    # Prasyarat: Ukuran a dan b harus sama
    if(magnitude(a) != 0 and magnitude(b) != 0):
        return (dot(a,b)/(magnitude(a)*magnitude(b)))
    else:
        return 0    # Jika ada pembagian dengan 0 akan mereturn nilai 0