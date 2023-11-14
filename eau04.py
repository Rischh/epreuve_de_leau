import sys

def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False
    return True

def next_prime(number):
    next_number = number + 1
    while True:
        if is_prime(next_number):
            return next_number
        next_number += 1

user_argument = int(sys.argv[1])

if is_prime(user_argument):
    next_prime_number = next_prime(user_argument)
    print(next_prime_number)
else:
    print(-1)
