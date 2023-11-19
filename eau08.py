import sys

def numbers_only(string):
   if string.isnumeric():
       return True
   else:
        return False

user_argument = sys.argv[1]

result = numbers_only(user_argument)

print(result)