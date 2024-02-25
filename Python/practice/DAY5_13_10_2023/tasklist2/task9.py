#
# Search word 
# Input: sentence = "i love eating burger", searchWord = "burg" 
# Output: 4



# sentence = "i love eating burger and burg"
# searchWord = "burg" 

# x=sentence.split()
# y=-1
# for i,x in range:
#     if searchWord in x:
#         y=x+1
#         break
#     print(y)

sentence = "i love eating burger"
searchWord = "burg"

words = sentence.split()

position = -1  

for i, word in enumerate(words):
    if searchWord in word:
        position = i + 1  
        break

print(position)
