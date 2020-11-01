'''def main():
    try:
        thefile = open('sbj1.txt', 'r')
        A="N"
        for line in thefile:
            A += line
    except IOError:
        print('There was an error opening the file!')
        return
    print(A)
 
if __name__ == '__main__':
    main()
'''

A=""
with open('sbj1.txt') as fh:
  for line in fh:
    A += line.rstrip()
    
