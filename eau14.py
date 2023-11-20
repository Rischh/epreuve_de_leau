import sys

def rules(arg):
    arg = ', '.join(arg)
    if arg.isdigit():
        return True

# def ascii_order(arg):
#     ascii = sorted(arg)
#     print(ascii)
    
def ascii_order(arg):
    swapped = True


    while swapped:

        swapped = False
    
    
        for i in range(len(arg) - 1):
       
            if arg[i] > arg[i + 1]:
           
                arg[i], arg[i + 1] = arg[i + 1], arg[i]
            
           
                swapped = True

    print(arg)
    

user_arguments = sys.argv[1:]

if rules(user_arguments):
        print("error")
        sys.exit(0)
else:   
    ascii_order(user_arguments)
