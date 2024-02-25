                                      #walrus operater
           
                            # old code
# while True:
#     name=input("enter your name: ")
#     if name=="exit":
#         break                                  
#     else:
#         print("hellow!",name)

                                                             # new

# while (name :=input("enter your name : ")) != "exit":
#     print("hellow!", name)                                
                                            #end

                        
# a=["jo","vini","john"]

# while True:
#     name=input("enter uour name: ") 
#     if name in a:    
#        print(f"helow!, {name}")
#        break
#     else:
#        print("no name found") 

                         #switch statement

# def switch(cas):
#     return{
#         1:"one",
#         "five":5
#     }.get(cas,"noyh")
# print(switch(1))
# print(switch("five"))
# print(switch(3))

# def switch(cas):
#     return{
#         1:"one",
#         "five":5
#     }.get(cas,"noyh")

# a= int(input("enter: "))
# print(switch(a))

                                          #int and string input
# def switch(cas):
#     return {
#         1: "one",
#         "five": 5
#     }.get(cas, "noyh")

# a = input("Enter: ")
# try:
#     a = int(a) 
# except ValueError:
#     pass  
# print(switch(a))

                             #except
# try:
#     print(45)
# except:
#     print("error ocured") 
# else:                     # or finally
#     print(23+8)


                           #continue
# i=0
# while i < 10:
#   i+=1
#   if i ==5:
#     continue
#   print(i)    