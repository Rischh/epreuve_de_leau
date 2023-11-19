import sys

try:
    def rules(arg1, arg2):
        return not (isinstance(arg1, int) and isinstance(arg2, int))

    def min_to_max(arg1, arg2):
        my_list = list(range(arg1, arg2))
        print(my_list)
        
    argument1 = int(sys.argv[1])
    argument2 = int(sys.argv[2])

    if rules(argument1, argument2):
        print("error")
    else:
        min_to_max(argument1, argument2)

except ValueError:
    print("error")