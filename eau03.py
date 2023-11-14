import sys

def rules():
    if len(sys.argv) != 2:
        return True
    else:
        return False
    

def fibonacci_sequence(fn):
    if fn == 0 :
        return 0
    elif fn == 1:
        return 1
    else:
        a, b = 0, 1
        
        for i in range(2,fn + 1):
            temp = a + b
            a = b
            b = temp 
            
        return b
 
n = int(sys.argv[1])

if rules():
    print(-1)
else:
    result = fibonacci_sequence(n)
    print(result)
