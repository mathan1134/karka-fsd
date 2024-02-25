#Remove and replace elements
 
# Input: nums = [3,2,2,3], remove = 3
# Output: 2, nums = [2,2,_,_]


# nums = [3,2,2,3]   #r=3
# nums.remove(3)
# nums.remove(3)
# print(nums)
nums = [3,2,2,3]
remove = 3

nums = [x if x != remove else "_" for x in nums]

while remove in nums:
    nums.remove(remove)

print(nums)





