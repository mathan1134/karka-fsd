#Write a program to find the given number is positive or negative or zero




def positive_negative_zero():
    number=int(input("enter a number :"))
    if number>0:
        print("positive number")
    elif number==0:
        print("zero")
    else:
        print("negative number")


positive_negative_zero()
