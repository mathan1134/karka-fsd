#Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
# Input: num = 38, Output: 2
# Explanation: The process is 38 --> 3 + 8 --> 11, 11 --> 1 + 1 --> 2 


# a=int(input("enter a number :"))

# while True:
#     x=a.split() a
#     x=
#    print()


number =int(input("enter a number :"))
while number > 9:
    number = sum(int(digit) for digit in str(number))
print(number)
