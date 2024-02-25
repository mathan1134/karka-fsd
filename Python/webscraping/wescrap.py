import requests
from bs4 import BeautifulSoup as bs
import csv    # save data

# def extract(url):
#     res=requests.get(url=url).content
#     print(res) 

# extract(url="https://www.freecodecamp.org/news/css-example-css3/" )   

# beautiful soup used to extract to specify one



# def extract(url):
#     res=requests.get(url=url).content
#     soup =bs(res,"lxml")
#     # tab=soup.find("video",{"class":"smtplayer"})        #for specific one
#     tab=soup.table.find_all("td")
#     tdetls=[ td.text for td in tab ]

#     tab1=soup.table
#     tbodys=tab1.find("tbody").find_all("tr")
#     # for tr in tbodys:
#     #     the=[td.text.strip() for td in tr.find_all("td")]
#         # print(the)
#     # print(tbodys)

#     with open("report.csv", "w", newline="") as file:
#         writen = csv.writer(file)

#         # Assuming 'tdetls' is a list containing the headers or details for the CSV file
#         writen.writerow(tdetls)

#     # Assuming 'tbodys' is a list containing the rows of the HTML table
#     for tr in tbodys:
#         the = [td.text.strip() for td in tr.find_all("td")]
#         writen.writerow(the)

# extract(url="https://www.freecodecamp.org/news/css-example-css3/"
# ) 



def imageget(url):
    res = requests.get(url=url).content
    soup = bs(res, "lxml")
    
    images = soup.find_all("img")
    for img in images:
        src=img.get("src").split("/")[-1]
        print(src)

        # content=requests.get(src).content
        
        # f=open(src,"wb")                                  #svg files so it return error
        # f.write(content)
                                             
          

imageget(url="https://www.freecodecamp.org/news/css-example-css3")
