import mysql.connector
import json
from datetime import datetime


conn = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Ma1026@",
        database="modify"
    )

curs = conn.cursor()
query = "SELECT * FROM employees"
curs.execute(query)
rows = curs.fetchall()

with open('recdatasql.json', 'r') as file:
        try:
            existing_data = json.load(file)
        except json.decoder.JSONDecodeError:
            existing_data = []

for row in rows:
        existing_data.append({
            'employee_id': row[0],
            'first_name': row[1],
            'last_name': row[2],
            'job_title': row[3],
            'hire_date': row[4].strftime('%Y-%m-%d'), 
            'salary': row[5]
        })

with open('recdatasql.json', 'w') as file:
        json.dump(existing_data, file, default=str, indent=4)  

print("Data successfully appended to 'recdatasql.json'")
print(rows)


