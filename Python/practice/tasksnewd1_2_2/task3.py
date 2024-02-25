# a=input("enter a word: ")

# b=''
# for x in a:
#     if x !=' ':
#        b+=x
# print(b)


# a=int(input("enter a value: "))
# b=int(input("enter b value: "))

# a=a+b
# b=a-b
# a=a-b

# print("your a value now",a,"& " "your b value now",b)


# def swap_numbers(a, b):
#     print("Before swapping: a =", a, "b =", b)
#     a = a + b
#     b = a - b
#     a = a - b
#     print("After swapping: a =", a, "b =", b)

# a = 10
# b = 5
# swap_numbers(a, b)




# Python Program to check if two Strings are Anagram.

# a=input("enter a word 1: ")
# b=input("enter a word 2: ")

# c=(sorted(a)==sorted(b))

# if c==c:
#     print("not anagram")
# else:
#     print("anagram")    


# Save the values in a dictionary by dynamically create the keys and values like below


# View = [
# {
# 'month': 1,
#  'units_consumed': 100,
#  'billAmount': 200
# },
# {
# 'month': 2,
#  'units_consumed': 150,
#  'billAmount': 300
# },
# {
# 'month': 3,
# 'units_consumed': 300,
# 'billAmount': 1500
# },
# {
# 'month': 4,
# 'units_consumed': 400,
#  'billAmount': 2000
# }
# ]
# for data in View:
#    print(data.keys())
#    print(data.values())


# Grouping Elements by Category
# Given a list of items, group them into categories using a dictionary, where the keys are the categories and the values are lists of items belonging to each category.

# Example Input :
list1 = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]

# {
# 'Fruits': ['Apple', 'Banana'], 'Vegetables': ['Carrot', 'Broccoli']
# }

# op={}
# for items in list1:
#     category=items['category'] 
#     name=items['name']
#     if category in op:
#         op[category].append(name)
#     else:
#         op[category]=[name]    
# print(op)  


# consumer_data = {
#     "consumer_name": "user",
#     "eb_reading": [1100, 1200, 1350, 1650, 2050]
# }
# b=consumer_data['eb_reading']
# x=b[0]+b[1]+b[3]+b[4]+b[2]


a = input("Enter 5 month values using (,): ")
b=list(map(int, a.split(',')))
x=b[0]+b[1]+b[3]+b[4]+b[2]

# a = input("Enter use of units (,): ")
# b=list(map(int, a.split(',')))
# x=0
# for c in b:
#     x+=c


print("total", x, "unit consume")

if x<100:
    print("your charge 0")
elif x>=100 and x<200:
    print("unit charge was 2")   
    print(x*2, "your payment amount" )
elif x>=200 and x<500:
    print("unit charge was 5")   
    print(x*5, "your payment amount" )    
elif x>=500 and x<1000:
    print("unit charge was 10")   
    print(x*10, "your payment amount" ) 
elif x>=1000:
    print("unit charge was 14")   
    print(x*14, "your payment amount" )       


my_resume = {
    "Name": "Mathan Jose",
    "E-mail": "mathan1026jose.com",
    "Mobile-no": "9489383139",
    "Soft Skills": ["Communication", "Teamwork", "Time Management"],
    "Hard Skills": ["Python", "JavaScript", "React","MySQL"],
    "Educational Qualification": {
        "SSLC": {"Year": 2013, "School": "Government High School", "Percentage": 85.5},
        "+2": {"Year": 2015, "School": "Government Hr Sec School", "Percentage": 60.0},
        "Degree": {"Year": 2019, "College": "Scott Christion College", "Degree": "Bachelor of Arts", "Percentage": 49.0}
    },
    "Projects": [
        {"Title": "Web Shoping Project", "Description": "Developed a Shoping website using  React."},
        {"Title": "Responsive Project", "Description": "Responsive Website"},
    ],
    "Experience": [
        {"Position": "Software Developer", "Company": "Tata Tech Inc.", "Duration": "2021-2023"},
        {"Position": "Data Analyst", "Company": "Power Co.", "Duration": "2024-present"},
    ],
    "Hobbies": ["Reading", "Traveling", "Games", "Gym", "Music"],
    "Personal Details": {
        "Father's name": "Vincent",
        "Father's occupation": "Coolie",
        "Languages Known": ["English", "Tamil", "Malayalam"],
        "DOB": "1998-02-24",
        "Gender": "Male",
        "Marital Status": "Single",
        "Address": "11/77,Alluvilai,Moolachel,Meakamandapam"
    }
}
