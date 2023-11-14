import sys

def number_arg():
    if len(sys.argv) <= 1:
        return True

def parameters_backwards(para):
    para.reverse()
    print(para)

parameters = sys.argv[1:]

if number_arg():
    print("erreur.")
    sys.exit(0)
else:
    parameters_backwards(parameters)
  
    
