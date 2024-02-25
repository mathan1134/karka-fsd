from fastapi import FastAPI
from typing import Optional,List
from pydantic import BaseModel
from details import user,gender,role
from uuid import UUID,uuid4



app = FastAPI()



@app.get("/")
def root():
    return {"Hello": "good"}

# @app.get("/local/{id}")
# def fun(id:int):
#     return {"your_id": id}


# @app.get("/item/{item_id}")
# async def read_item(item_id: int):
#     datas = {
#         1: "hi",
#         2: "how are you",
#         10: "fine"
#     }
#     return {"Item_Id": item_id, "detail": datas.get(item_id)}


# @app.get("/limi/{data_id}")
# async def lim(data_id: int, limit: int=7):
#     return {"datas": {"new": data_id, "limits": limit}}

# @app.get("/optnl/{new}")
# async def opnl(new: int, limit: Optional[int]=None):
#     return {"newfun": {"key": new,"limits": limit}}

# @app.get("/next/{other}")
# async def opnl(other: int, limit: Optional[int]=None):
#     if limit is None:
#         return {"newfun": {"key": other}}
#     else:
#         return {"newfun": {"key": other, "limits": limit}}
    

# class newfun(BaseModel):
#     name:str
#     age:int
#     place:str

# @app.post("/po/")
# async def index(newfun:newfun):
#     return{"datas":newfun}


db:List[user]=[
    user(
        id=uuid4(),
        f_name="jo",
        l_name="v",
        Gender=gender.male,
        Role=[role.admin]
),
    user(
        id=uuid4(),
        f_name="sheya",
        l_name="vs",
        Gender=gender.female,
        Role=[role.admin]
    )             
]            
@app.get("/api/users")
def users():
    return db

@app.post("/api/users")
def usere (user:user):
    db.append(user)
    return{"id":user.id}