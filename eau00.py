def combination_3_numbers():
    for unit in range(10):
        for ten in range(10):
            for hundred in range(10):
            
                if unit <= ten <= hundred:
                    print(unit, ten, hundred)

    
combination_3_numbers()