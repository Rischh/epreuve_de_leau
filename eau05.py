import sys

def rules(str, str2, arg):
    if str.isdigit() or str2.isdigit():
        return True
    elif len(sys.argv) < arg + 1:
        return True
    return False

def string_in_string(str, str2):
    if str2 in str:
        return True
    return False

if len(sys.argv) < 3:
    print("error")
    sys.exit(0)
    
string = sys.argv[1]
string2 = sys.argv[2]
arg = 2

if rules(string, string2, arg):
        print("error")
        sys.exit(0)
else:
    if string_in_string(string, string2) == True:
        print(True)
    else:
        print(False)





