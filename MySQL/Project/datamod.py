import mysql.connector
from tabulate import tabulate

def print_table(cursor):
    query = "SELECT * FROM employees"
    cursor.execute(query)
    results = cursor.fetchall()

    data_list = []
    for row in results:
        data_list.append({
            "employee_id": row[0],
            "first_name": row[1],
            "last_name": row[2],
            "job_title": row[3],
            "hire_date": str(row[4]),
            "salary": float(row[5])
        })

    headers = data_list[0].keys()
    table_data = [list(employee.values()) for employee in data_list]

    print(tabulate(table_data, headers=headers, tablefmt="grid"))

conn = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="Ma1026@",
    database="modify"
)
cursor = conn.cursor()

print_table(cursor)

print("delete, insert, update")
user_input = input("Select one: ")

if user_input == "delete":
    print("Which row do you want to delete?")
    delete_id = input("Select the employee id: ")
    delete_query = "DELETE FROM employees WHERE employee_id = %s"
    cursor.execute(delete_query, (delete_id,))
    conn.commit()
    print("Successfully deleted.")
    print_table(cursor)

elif user_input == "insert":
    userid = int(input("Enter employee id: "))
    first_name = input("Enter first name: ")
    last_name = input("Enter last name: ")
    job_title = input("Enter job title: ")
    hire_date = input("Enter hire date (YYYY-MM-DD): ")
    salary = float(input("Enter salary: "))

    insert_query = "INSERT INTO employees (employee_id, first_name, last_name, job_title, hire_date, salary) VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(insert_query, (userid, first_name, last_name, job_title, hire_date, salary))
    conn.commit()
    print("Successfully inserted.")
    print_table(cursor)

elif user_input == "update":
    update_id = input("Enter employee id to update: ")
    print("Select a field to update: id, first_name, last_name, job_title, hire_date, salary")
    select = input("Enter field name: ")
    if select in ["id", "first_name", "last_name", "job_title", "hire_date", "salary"]:
        new_value = input("Enter new value: ")
        update_query = f"UPDATE employees SET {select} = %s WHERE employee_id = %s"
        cursor.execute(update_query, (new_value, update_id))
        conn.commit()
        print("Successfully updated.")
        print_table(cursor)
    else:
        print("Invalid field name.")

cursor.close()
conn.close()
