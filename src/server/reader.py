# =============================================================
# Module document.py
# =============================================================
# Berisi semua hal yang berkaitan dengan pembacaan dokumen dari file

from os import listdir
from os.path import isfile, join

def get_files(path):
    # Mereturn semua file yang ada dalam sebuah folder
    return [f[:len(f)-4] for f in listdir(path) if isfile(join(path, f))]

def read_txt(path):
    # Membaca file txt
    result = ""

    with open(path) as text:
        for line in text:
            result += line.rstrip()
    
    return result

def write(doc, path):
    # Writing
    file = open(path, 'w')
    file.write(doc)
    file.close()