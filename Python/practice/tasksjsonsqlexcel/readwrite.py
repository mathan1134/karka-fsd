# write and read

import json

# user={
#     "name":"jose",
#     "age":28,
#     "place":"mcl"   
# }

# data=json.dumps(user)

# file=open('users.json','w')
# file.write(data)
# file.close()

# data=open("users.json","r")
# x=data.read()
# data.close()

# # print(x)

# dict=json.loads(x)
# print(dict["name"])


import json

new_data = {
    "name": "mano",
    "age": 24,
    "place": "tck"
}

with open('readwrite.json', 'r') as file:
    try:
        existing_data = json.load(file)
    except json.decoder.JSONDecodeError:
        existing_data = []

existing_data.append(new_data)

with open('readwrite.json', 'w') as file:
    json.dump(existing_data, file, indent=4) 

print(" successfully")
