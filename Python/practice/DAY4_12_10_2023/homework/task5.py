# Write a program to count the occurence of even numbers and odd numbers between the range 10 – 55.

# count=0
# for a in range(10,56):
#     if a%2==0:
#      count+=1
#      print(count)
#     else:
#         count=+1
#         print(count)
    
           
# a=[1,3,3,4,3,2,3]
# n=3

# x=a.count(n)
# print(x,"(3 occurs 4 time)")


start, end = 10, 55
even_count, odd_count = 0, 0

for num in range(start, end+1):
    if num % 2 == 0:
        even_count += 1
    else:
        odd_count += 1

print(f"The number of even numbers between {start} and {end} is {even_count}.")
print(f"The number of odd numbers between {start} and {end} is {odd_count}.")


                                