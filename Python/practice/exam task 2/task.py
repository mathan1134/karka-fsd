# x=[3,1,2,3]
# o/p=[3,0,3,1,0,4,2,0,6,3,0,9]

x = [3, 1, 2, 3]
result = []

for num in x:
    result.append(num)
    result.append(0)
    result.append(num * 3) 

# print(result)



# x = [3, 1, 2, 3]
# y = []

# for num in x:
 
#     y.append(num)
#     y.append(0)
#     y.append(num * 2)

# print(y)

# x=[12,34,56,78]
# y=x.copy()
# add=input("enter :")
# y=int(y)
# y.append(add)
# print(y)

# x = [1, 2, 3, 3]
# y = x.copy()  # Create a copy of list x to avoid modifying it directly
# y.append(4)   # Add the element 4 to the end of list y
# print(y)


# x = [1, 2, 3, 3]
# user_input = input("Enter the last element for list y: ")

# last_element = int(user_input)

# # Create list y by extending list x
# y = x.copy()
# y.append(last_element)


# print("y =", y)

start = 1
# end=int(input("enter a num: "))
total = 0

# for num in range(start, end +1 ):
#     total += num

# print("Sum:", total)


            
arr = [1, 0, 2, 3, 0, 4, 5, 0]

i = 0
while i < len(arr):
    arr.insert(i+1, arr[i])
    i += 2

print(arr)


