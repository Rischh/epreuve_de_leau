import sys

def rules(ele):
    return not ele.isdigit()

def bubblesort(elements):
    swapped = True
    
    while swapped:
        swapped = False
        for i in range(len(elements) - 1):
            if elements[i] > elements[i + 1]:
                elements[i], elements[i + 1] = elements[i + 1], elements[i]
                swapped = True

elements = sys.argv[1:]

if rules(elements[0]):
    print("error")
else:
    bubblesort(elements)
    print(elements)
