#Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right
# Input: arr = [1,0,2,3,0,4,5,0]
# Output: [1,0,0,2,3,0,0,4]

arr = [1, 0, 2, 3, 0, 4, 5, 0]

# i = 0
# while i < len(arr):
#     if arr[i] == 0:
#         arr.insert(i + 1, 0)
#         i += 1  
#     i += 1
# arr=arr[:-3]
# print(arr)

# arr = [1, 0, 2, 3, 0, 4, 5, 0]
# dup = [num for num in arr for _ in range(2 if num == 0 else 1)]
# dup=dup[:-3]
# print(dup)

# arr = [1,0,2,3,0,4,5,0]
# d=[]
# for f in  arr:
#     d.append(f)
#     if f==0:
#         d.append(0)
# d=d[:-3]
# print(d)  

#Intersection of Two Arrays
# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2]

# x= [1,2,2,1]
# x=[y for y in x if y !=1 ]          #not
# print(x)

# num1 = [1,2,2,1]
# num2 = [2,2]

# op=list(set(num1)&set(num2))
# print(op)


# A password is said to be strong if it satisfies all the following criteria: It has at least 8 characters, 
# one lowercase letter, one uppercase letter, one digit, one special character.

def fun(passw):
    digit = any(char.isdigit() for char in passw)
    uppercase = any(char.isupper() for char in passw)
    lowercase = any(char.islower() for char in passw)
    special_char = any(char in "!@#$%^&*()_-=+?<>" for char in passw)

    if not digit:
        print("Password must contain at least one digit.")
    if not uppercase:
        print("Password must contain at least one uppercase letter.")
    if not lowercase:
        print("Password must contain at least one lowercase letter.")
    if not special_char:
        print("Password must contain at least one special character.")

user = input("Enter a password: ")

while True:
    if fun(user):
        print("Strong password!")
        break
    else:
        user = input("Password is not strong. Please enter a new password: ")



