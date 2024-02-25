#Write a program to find a maximum of two numbers




# def maximum():
#     i=[100,560]
#     a=max(i)
#     print(a)

# maximum()


def maximum():
    a=float(input("enter a number :"))
    b=float(input("enter a number :"))
    c=(a,b)
    d=max(c)
    if d==a:
        print(a,"maximum number of your list")
    else:
        print(b,"maximum number of your list")
maximum()
