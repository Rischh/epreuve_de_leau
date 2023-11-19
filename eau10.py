import sys

def index_wanted(arg):
    list = arg
    last_index = sys.argv[-1]
    find = list.index(last_index)
    print(find)
    
user_argument = sys.argv[1:]

index_wanted(user_argument)