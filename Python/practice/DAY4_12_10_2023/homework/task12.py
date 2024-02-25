# Write a program to print the greatest of three numbers.





a=int(input("enter number1 :"))
b=int(input("enter number2 :"))
c=int(input("enter number3 :"))

if a>b and a>c:
    print(a)
elif b>a and b>c:
    print(b)
else:
    print(c)