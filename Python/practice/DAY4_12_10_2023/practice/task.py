


# input a=[3,2,2,3,5,10,11,5]
# output[3,2,2,3,10,11,*,*]

# a = [3, 2, 2, 3, 5, 10, 11, 5]
# output = []
# a.remove(5)
# a.remove(5)
# for i in a:
#     if i == 10:
#         output.append(i)
#     elif i == 11:
#         output.append(i)
#         output.append('*')
#         output.append('*')
#     else:
#         output.append(i)
# print(output)

# a=[3,2,2,3,5,10,11,5] #x=5

# for x in a:
#     if x==5:
#         a.remove(x)
#         a.append("*")
# print(a)



a=[5,0,10,0,15,0,20,0,30]    #0/p=[5,0,0,10,0,0,15,0,0,20,0,0]
output=[]
for x in a:
    if  x == 0:
        output.extend([0,0])
    else:
        output.append(x)
print(output)


# a = [5, 0, 10, 0, 15, 0, 20, 0, 30]
# output = []

# for x in a:
#     if x == 0:
#         output.extend([0, 0])
#     else:
#         output.append(x)

# print(output)









