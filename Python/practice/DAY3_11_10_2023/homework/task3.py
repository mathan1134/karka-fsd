#Write a program that gets several integers from the user.
#  Sum up all the integers they give you. Stop looping when they enter a 0. Display the total at the end.




total = 0
while 45:
    num = int(input("Enter an integer (0 to stop): "))
    if num == 0:
        break
    total += num

print("The total is:", total)     


                                     