from os import listdir
from os.path import isfile, join
from document import document, get_tokens, get_first_sentence, get_num_words
from vector import vectorize, sim
from reader import get_files, read_txt