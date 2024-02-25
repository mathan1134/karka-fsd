# Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right
# Input: arr = [1,0,2,3,0,4,5,0]
# Output: [1,0,0,2,3,0,0,4]   


arr = [1,0,2,3,0,4,5,0]
d=[]
for f in  arr:
    d.append(f)
    if f==0:
        d.append(0)
d=d[:-3]
print(d)        


# arr = [1, 0, 2, 3, 0, 4, 5, 0]
# n = len(arr)
# i = 0

# while i < n:
#     if arr[i] == 0:
#         arr.insert(i + 1, 0)   
#         i += 1  
#         n += 1  
#     i += 1
# arr = arr[:-3]
# print(arr)


# arr = [1, 0, 2, 3, 0, 4, 5, 0]
# length = len(arr)

# for i in range(length -1,-1,-1):

#     if arr[i] == 0:
#         arr.insert(i, 0)  

#         if len(arr) > length:
#             arr.pop()

# print(arr)





# Input : [5, 10, 20, 2, 0, 33, 100, 90]
# Output :  [5, 10, 15, 20, 2, 22, 0, 33, 33, 100, 90, 190]

x = [5, 10, 20, 2, 0, 33, 100, 90]

ans2=x[6]+x[7]
x.insert(8,ans2)
ans3=x[4]+x[5]
x.insert(6,ans3)
ans = x[2] + x[3]  
x.insert(4, ans)  
ans1 =x[0]+x[1]
x.insert(2,ans1)

# print(x)  

x = [5, 10, 20, 2, 0, 33, 100, 90]

sums = [x[i] + x[i+1] for i in range(0, len(x), 2)]
index = 2

for s in sums:
    x.insert(index, s)
    index += 3 
# print(x)
    



# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]
    
# a = [0, 1, 0, 3, 12]

# zero = []

# for num in a:
#     if num != 0:
#         zero.append(num)

# a[:] = zero + [0] * (len(a) - len(zero))

# print(a)




# nums = [0, 1, 0, 3, 12]

# left = 0
# right = 0

# while right < len(nums):
#     if nums[right] != 0:
#         nums[left], nums[right] = nums[right], nums[left]
#         left += 1  
#     right += 1  

# print(nums)
    



n = [0, 1, 0, 3, 12]
s=sorted(n)

# s.sort(key=lambda x: x == 0)
# print(s)

arr = [x for x in s if x != 0] + [x for x in s if x == 0]
print(arr)
