#6) How Old Are You, Specifically?
#Using if statements, else if, and else statements, make a program which displays a different message depending on the age given.
# age				
                # message
# less than 16	
                # "You can't drive."
# 16 to 17		
                # "You can drive but not vote."
# 18 to 24		
                # "You can vote but not rent a car."
# 25 or older		
                # "You can do pretty much anything."




def age():
    name=input('hey! what is your name?(sorry i keep forgetting :)')
    age=int(input("ok" and name and "how old are yoyu?: "))

    if age<16 :
        print("you can't drive ",name)

    if age>=16 and  age<=17:
        print("you can drive but not vote",name)

    if age >=18 and age<25:
        print("you can vote but not rent a car",name)

    else:
        print("you can do pretty much anything",name)
age()
