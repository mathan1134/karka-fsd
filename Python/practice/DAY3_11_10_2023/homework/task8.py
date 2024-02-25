# #Write a Python program that determines if a given year is a leap year.Enter a year as input.
# Use conditional statements to check if the year satisfies the leap year conditions:
# The year should be divisible by 4 but not divisible by 100, or
# The year should be divisible by 400.
# Use appropriate logical operators and conditions to implement the leap year logic.
# Display an appropriate message indicating whether the year is a leap year or not.
# Example output:
# Enter the year=2024
# 2024 is a leap year


def leap_year():
    year = int(input("Enter the year: "))
    if (year % 400 == 0):
        print(year, "is a leap year")
    else:
        print(year, "is not a leap year")
   
    
            

leap_year()
