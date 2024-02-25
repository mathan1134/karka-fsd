from pydantic import BaseModel
from typing import Optional
from uuid import UUID,uuid4
from enum import Enum

class gender(str,Enum):
    male="male"
    female="female"

class role(str, Enum):
    admin="admin"
    user="user"
    student="student"

class user(BaseModel):
    id: Optional[UUID]=uuid4
    f_name:str
    l_name:str
    Gender:gender
    Role:list[role]
