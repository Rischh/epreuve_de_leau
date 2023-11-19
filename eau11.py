import sys

def absolute_minimum_difference(arg):
    list = arg

    minimum_difference = float('inf')

    for arg in list:
        for other_arg in list:
            if arg != other_arg:
                actual_diff = abs(int(arg) - int(other_arg))

                if actual_diff < minimum_difference:
                    minimum_difference = actual_diff

    print(minimum_difference)

user_arguments = sys.argv[1:]

absolute_minimum_difference(user_arguments)