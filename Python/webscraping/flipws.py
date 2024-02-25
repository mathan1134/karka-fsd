import requests
from bs4 import BeautifulSoup as bs

def flipka(url):
    response=requests.get(url=url).content
    soup=bs(response,"lxml")
    res=soup.find("div",{"class": "_1cmsER"})
    print(res)
flipka(url="https://www.flipkart.com/checkout/init?view=FLIPKART&loginFlow=false")
