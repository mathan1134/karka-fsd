#given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# Input: nums = [1,2,3,1] , Output: true
# Input: nums = [1,2,3,4], Output: false


# a=[1,2,1,3]

# nums = [1,2,3,1]
# def containsDuplicate(self, nums: list[int]) -> bool:
#     nums.sort()
#     for i in range(0,len(nums)-1):
#         if nums[i] == nums[i+1]:
          
a=[1,2,4,3]

if len(a) != len(set(a)):
    print("True.")
else:
    print("false.")


