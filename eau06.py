import sys

def rules(arg):
    if arg.isdigit():
        return True

def other_letter(string):
    new_quote = ""
    i = True 
    for char in string:
        if i:
            new_quote += char.upper()
        else:
            new_quote += char.lower()
        if char != ' ':
            i = not i
    return new_quote

user_argument = sys.argv[1]

if rules(user_argument):
        print("error")
        sys.exit(0)
else:
    resultat = other_letter(user_argument)

    print(resultat)


