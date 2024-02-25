

begin=int(input("enter a number :"))
end=int(input("enter a number :"))

print(begin ,"and",end)
for number in range(begin ,end +1):
    if number%2==0:
        print(number)