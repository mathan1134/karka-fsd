# Array Wrapper
# Input: nums = [[1,2],[3,4]], operation = "Add"
# Output: 10
# Input: nums = [[23,98],[42,70]], operation = "String"
# Output: "[23,98,42,70]"

# nums=input("enter a numbers with space: ")
# x=list(map(int,nums.split()))
# if len(x)!=4:
#     print("enter 4 each numbers")
# else:
#     array = [[x[0], x[1]], [x[2], x[3]]]
#     print(array)

# fun=input("please select operation ( ADD & STRING): ").lower()

# if fun=="add":
#     print(x[0]+x[1]+x[2]+x[3])
# elif fun=="string":
#     print([x[0],x[1],x[2],x[3]])    
    

# Input : [5, 10, 20, 2, 0, 33, 100, 90]
# Output :  [5, 10, 15, 20, 2, 22, 0, 33, 33, 100, 90, 190]

# x = [5, 10, 20, 2, 0, 33, 100, 90]
# sums = [x[i] + x[i+1] for i in range(0, len(x), 2)]
# index = 2

# for s in sums:
#     x.insert(index, s)
#     index += 3 
# print(x)



# Move Zeroes
# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]

# n = [0, 1, 0, 3, 12]
# s=sorted(n)

# arr = [x for x in s if x != 0] + [x for x in s if x == 0]
# print(arr)