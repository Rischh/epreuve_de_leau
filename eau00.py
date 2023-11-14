def combination_2_numbers(li):
    li = []

    for first_number in range(100):
        for second_numbers in range(100):
            
            if first_number <= second_numbers:
                
                first_number_formate = str(first_number).zfill(2)
                second_numbers_formate = str(second_numbers).zfill(2)
                
                pair = (first_number_formate, second_numbers_formate)
                li.append(pair)
    
    for pair in li:
        print(pair)
    
list = ["%.2d" % i for i in range(100)]
    
combination_2_numbers(list)
    



