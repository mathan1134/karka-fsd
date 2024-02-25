# save data mysql

import pymysql
import json

with open("senddata.json") as file:
    data1 = json.load(file)

con = pymysql.connect(host="localhost", user="root", password="Ma1026@", db="karka")
cursor = con.cursor()

try:
    for book in data1["books"]:
        book_id = book["id"]
        book_title = book["title"]
        book_year = book["year"]
        book_genre = book["genre"]
        book_rating = book["rating"]

        sql_books = "INSERT INTO books (id, title, year, genre, rating) VALUES (%s, %s, %s, %s, %s)"
        values_books = (book_id, book_title, book_year, book_genre, book_rating)
        cursor.execute(sql_books, values_books)
        print("Insert book:", book_title)

    for movie in data1["movies"]:
        movie_id = movie["id"]
        movie_title = movie["title"]
        movie_year = movie["year"]
        movie_type = movie["type"]
        movie_rating = movie["rating"]

        sql_movies = "INSERT INTO movies (id, title, year, type, rating) VALUES (%s, %s, %s, %s, %s)"
        values_movies = (movie_id, movie_title, movie_year, movie_type, movie_rating)
        cursor.execute(sql_movies, values_movies)
        print("Insert movie:", movie_title)

    con.commit()
    print("Data successfully inserted into the database.")

except pymysql.Error as e:
    print("Error:", e)

finally:
    con.close()
