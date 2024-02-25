# Eg., arr = [5,2,-7,3,-2,-1]. The function should return only negative numbers ie., [-7, -2, -1]

# arr = [5,2,-7,3,-2,-1]

# b=[a for a in arr if a<0]
# print(b)

# for i in arr:
#     if i<0:
#         print(i)

# def get_negative_numbers(arr):
#     return [num for num in arr if num < 0]
# arr = [5, 2, -7, 3, -2, -1]
# negative_numbers = get_negative_numbers(arr)
# print(negative_numbers)  


# In a given array, remove all the odd numbers and replace that number with 0 
# Output : [0,10, 0, 20, 22, 0]

# a=[5, 10, 15, 20, 22, 23]

# for i, x in enumerate(a):
#     if x % 2 != 0:
#         a[i] = 0
# print(a)  

# b = [0 if x % 2 != 0 else x for x in a]
# print(b)  


# Write a program that gets several integers from the user. Sum up all the  Integers they give you. 
# Stop looping when they enter a 0. Display the total at the end.

# total=0
# while True:
#     a=int(input("enter a number: "))
#     if a==0:
#         break
#     total += a
# print(total)

#How Old Are You, Specifically?

# while True:
#     x=input("enter your age: ")
#     try:
#         x=int(x)
#     except ValueError:
#         pass    
#     if x=="exit":
#         break
#     elif x<16:
#         print("you cannot drive ")
#     elif x<=16 and x<=17:
#         print("you drive but not vote")  
#     elif x<=18 and x<=24      :
#         print("you can vote but not rent a car")
#     else:
#         print("you do well pretty much")    

#Write a program to iterate the first 10 numbers, and in each iteration,
# print the sum of the current and previous number
# previous_number = 0

# for i in range(1, 11):
#     current_sum = i + previous_number
#     print(f"Current number: {i}, Previous number: {previous_number}, Sum: {current_sum}")
#     previous_number = i
# print(previous_number)    

# Write a program to count the occurence of even numbers and
# odd numbers between the range 10 – 55.

# odd_num=0
# even_num=0

# for num in range(10,55+1):
#     if  num%2==0:
#         even_num+=1
#     else:
#         odd_num+=1
# print("odd number",odd_num) 
# print("even numer",even_num)     

# Day 2 - Python Assessment 
# Given two integer numbers return their product. If the product is greater than 500, then return their sum.

# a=int(input("enter a product1: "))
# b=int(input("enter a product2: "))
# result=a*b
# if result>500:
#     print(a+b)
# else:
#     print(result)    

# def product_or_sum(num1, num2):
#     product = num1 * num2  
    
#     if product > 500:
#         return num1 + num2 
#     else:
#         return product  

# num1 = int(input("Enter the first integer: "))
# num2 = int(input("Enter the second integer: "))

# result = product_or_sum(num1, num2)
# print("Result:", result)


# Write a program to print the greatest of three numbers.
# a=5
# b=6
# c=89
# d=[]
# d.extend([a,b,c])
# print(max(d))

# x=int(input("enter a number: "))
# y=int(input("enter a number: "))
# z=int(input("enter a number: "))
# ans=([x,y,z])
# print(max(ans))

#Write a program in Python to remove duplicate items from a list.

# a=[1,5,7,0,0,2,1,0]
# b=(set(a))
# print(list(b))

# def removefun(a):
#     b=set(a)
#     a=list(b)
#     return a
# v=[1,5,7,0,0,2,1,0]
# x=removefun(v)
# print(x)

# Remove and replace elements
# Input: nums = [3,2,2,3], remove = 3
# Output: 2, nums = [2,2,_,_]

# nums = [3,2,2,3]
# for x in nums:
#     nums.remove(3)
#     print(nums)


# def remove_and_replace(nums, remove):
#     new_nums = [x if x != remove else '_' for x in nums]
#     num_removed = nums.count(remove)
#     new_nums.extend(['_'] * num_removed)
#     return new_nums
# nums = [3, 2, 2, 3]
# remove = 3
# new_nums = remove_and_replace(nums, remove)
# print(new_nums) 

# nums = [3,2,2,3]
# x=[0 if num == 3 else num for num in nums]
# y=["_" if z==0 else z for z in x]                  #not finish
# print(y)

# Given an integer array nums, return true if any value appears at least twice in the array, 
     #and return false if every element is distinct.
# Input: nums = [1,2,3,1] , Output: true
# Input: nums = [1,2,3,4], Output: false

# x=int(input("enter a numbers"))
# x=[1,2,5]
# if len(x)!=len(set(x)):
#     print("true")
# else:
#     print("false")    


# z = input("Enter numbers separated by space: ")
# x = list(map(int, z.split()))
# if len(x)!=len(set(x)):
#     print("true")
# else:
#     print("false") 

#Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
# Input: num = 38, Output: 2
# Explanation: The process is 38 --> 3 + 8 --> 11, 11 --> 1 + 1 --> 2

def getSum(n):
    sum = 0
    while n != 0:
        sum += n % 10
        n = int(n / 10)
    return sum

if __name__ == "__main__":
    n = int(input("enter a number: "))
    while n > 10:
        if n>10:
         print(n)
        n = getSum(n)
        print(getSum(n))
        

     