
# A password is said to be strong if it satisfies all the following criteria:
#  It has at least 8 characters, one lowercase letter, one uppercase letter, one digit, one special character.

# import re

# def is_strong_password(password):
#     # Check if the password has at least 8 characters
#     if len(password) < 8:
#         return False

#     # Check if the password contains at least one lowercase letter
#     if not re.search(r'[a-z]', password):
#         return False

#     # Check if the password contains at least one uppercase letter
#     if not re.search(r'[A-Z]', password):
#         return False

#     # Check if the password contains at least one digit
#     if not re.search(r'\d', password):
#         return False

#     # Check if the password contains at least one special character (e.g., @, #, $, etc.)
#     if not re.search(r'[!@#$%^&*()_+{}:;<>,.?~\[\]]', password):
#         return False

#     # If all criteria are satisfied, the password is strong
#     return True

# # Example usage:
# password = "P@ssw0rd"
# if is_strong_password(password):
#     print("Password is strong.")
# else:
#     print("Password is not strong.")
