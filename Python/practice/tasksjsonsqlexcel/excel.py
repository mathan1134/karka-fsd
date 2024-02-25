import pandas as pd

excel_file_path = r'C:\Users\admin\Downloads\Untitled spreadsheet (1).xlsx'

data = pd.read_excel(excel_file_path)
excel_dict = data.to_dict(orient='records')
print(excel_dict)