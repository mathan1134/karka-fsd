#The user is prompted to enter their age using the input() function. 
# The entered value is then converted to an integer using int(). 
# The if condition checks if the age is greater than or equal to 18,
#  If the condition is true, the person is eligible to vote; otherwise, they are not eligible.
#  The appropriate message is printed based on the result of the if condition.

age=int(input("enter your age :"))
if (age>=18):
    print("you are eligible for vote")
elif(age<=17):
    print("you are not eligible for vote")