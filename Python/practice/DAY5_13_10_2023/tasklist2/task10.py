# Minimum Sum of Four Digit Number After Splitting Digits
# Input: num = 2932 Output: 52 
# Possible pair :  [22, 93], [23, 92], [223, 9] and [2, 329] 
# The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.


# def minSum(num):
#     num_str = str(num)
#     min_sum = float('inf')

#     for i in range(1, len(num_str)):
#         left = int(num_str[:i])
#         right = int(num_str[i:])
#         current_sum = left + right
#         min_sum = min(min_sum, current_sum)

#     return min_sum

# # Example usage
# num = 2932
# output = minSum(num)
# print(output)
