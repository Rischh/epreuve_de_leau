import sys

def rules(arg):
    if arg.isdigit():
        return True

def capitalize_first_letter(string):
    new_quote = ""
    capitalize_next = True

    for char in string:
        if capitalize_next:
            new_quote += char.upper()
            capitalize_next = False
        else:
            new_quote += char.lower()

        if char == ' ':
            capitalize_next = True

    return new_quote

user_argument = sys.argv[1]

if rules(user_argument):
        print("error")
        sys.exit(0)
else:
    resultat = capitalize_first_letter(user_argument)

    print(resultat)
