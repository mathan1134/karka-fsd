#the user is promoted to enteir their age using the input() function. you can use a for loop and if condition to iterate through the numbers from
#1 to given input and print only the odd numbers


age=int(input("enter your age :"))
for number in range (0,age+1):
    if number%2==1:
        print(number)

    
