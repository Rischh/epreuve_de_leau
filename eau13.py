import sys

def rules(ar, sz):
    return not all(num.isdigit() for num in ar) or not sz.isdigit()

def selectionSort(array, size):
    for ind in range(size):
        min_index = ind
 
        for j in range(ind + 1, size):
            if array[j] < array[min_index]:
                min_index = j
        array[ind], array[min_index] = array[min_index], array[ind]
 
arr = sys.argv[1:]
size = len(arr)

if rules(arr, str(size)):
    print("error")
else:
    selectionSort(arr, size)
    print(arr)