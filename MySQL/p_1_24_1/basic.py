import mysql.connector
import json

conn = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="Ma1026@",
    database="task1"
)
cursor = conn.cursor()

query = "SELECT job,place FROM task14 limit 6"
cursor.execute(query)

results = cursor.fetchall()
# print(results)
# print(type(results))

# b=json.loads(results)
# print(b)

data=[]
for row in results:
    data.append({"job":row[0],"name":row[1]})
# print(data)

data1=json.dumps(results,indent=0)
# print(data1)

cursor.close()
conn.close()




a='{"name":"jose","age":25}'
# print(a)

# print(a["name"])

b=json.loads(a)
# print(b)
# print(b["name"])

c=json.dumps(b)
# print(c)
# print(type(c))
# print(c["name"])



# Python dictionary
data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(data["name"])


# Convert Python dictionary to JSON string
# json_data = json.dumps(data)  
# print(json_data)
# print(data["name"])


# JSON string
json_data = '{"name": "John", "age": 30, "city": "New York"}'

# Convert JSON string to Python dictionary
data = json.loads(json_data)
# print(data)
print(data["name"])

