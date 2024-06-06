from pydantic import BaseModel

class Employee(BaseModel):
    e_id: str
    e_name: str
    e_type: str
    primary_specialization: str
    secondary_specialization: str
    location: str
    password: str

