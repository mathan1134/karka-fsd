#the user is promoted to enteir their age using the input() function. you can use a for loop and if condition to iterate through the numbers from
#1 to given input and print only the even numbers


age=int(input("enter your age :"))
for num in range(0,age+1):
    if num%2==0:
        print(num)