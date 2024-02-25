import json

# JSON string
json_data = '{"name": "John", "age": 30, "city": "New York"}'

# Convert JSON string to Python dictionary
data = json.loads(json_data)

# Access the data

# print("Name:", data["name"])
# print("Age:", data["age"])
# print("City:", data["city"])




import json

# Create a Python dictionary
data = {
    "name": "Jane",
    "age": 25,
    "city": "Los Angeles"
}

# Convert the dictionary to JSON string
json_data = json.dumps(data, indent=2)  

# Print the JSON string
# print(json_data)


import json

# Create a list of dictionaries
data_list = [
    {"name": "Alice", "age": 28},
    {"name": "Bob", "age": 35}
]

json_array = json.dumps(data_list, indent=2)

# print(json_array)


import json

# JSON array string
json_array = '[{"name": "Alice", "age": 28}, {"name": "Bob", "age": 35}]'

# Convert JSON array string to a Python list of dictionaries
data_list = json.loads(json_array)

# Access the data in the list
# for person in data_list:
    # print("Name:", person["name"])
    # print("Age:", person["age"])



import pandas as pd

# Use a raw string
excel_file_path = r'C:\Users\admin\Downloads\Untitled spreadsheet (1).xlsx'

df = pd.read_excel(excel_file_path)
excel_dict = df.to_dict(orient='records')
print(excel_dict)


# try:
#     df = pd.read_excel(excel_file_path)
   
#     # Check if the DataFrame is empty
#     if df.empty:
#         print("The Excel file is empty.")
#     else:
#         # Convert the DataFrame to a dictionary
#         excel_dict = df.to_dict(orient='records')

#         # Print the resulting dictionary
#         print(excel_dict)

# except FileNotFoundError:
#     print(f"Error: The file '{excel_file_path}' not found.")
# except pd.errors.EmptyDataError:
#     print("Error: The Excel file is empty.")
# except Exception as e:
#     print(f"An unexpected error occurred: {str(e)}")

# print("End of script.")


