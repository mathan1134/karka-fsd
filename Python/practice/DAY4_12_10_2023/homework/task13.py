# Write a program to separate positive and negative numbers from a list.
# 	Input:  Given x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
# Output:  Positive: [23, 4, 23, 21, 3], Negative: [-6, -45, -9, -8]


x = [23, 4, -6, 23, -9, 21, 3, -45, -8]

neg=[]
pos=[]
for a in x:
    if a>=0:
        pos.append(a)
    else:
        neg.append(a)

print(pos)
print(neg)