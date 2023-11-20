import sys

def rules(arg):
    arg = ', '.join(arg)
    if arg.isdigit():
        return True

def ascii_order(arg):
    ascii = sorted(arg)
    print(ascii)

user_arguments = sys.argv[1:]

if rules(user_arguments):
        print("error")
        sys.exit(0)
else:   
    ascii_order(user_arguments)
