from faker import Faker
import random
import sys
sys.path.append('./')
from schema import Employees
from functions import create_id

def add_to_employees():
    types = ["admin", "nurse", "physician", "surgeon"]
    locations = ["ICU", "OPD", "Emergency", "Inpatient Service", 
                "Medical Department", "Paramedical Department",
                "Rehabilitation Department", "Operation Theatre (OT)"]
    specializations = ["orthopedics", "internal medicine", "gynecology", 
                    "dermatology", "pediatrics", "radiology", 
                    "ophthalmology", "cardiology", "neurology"]

    for i in range(10):
        fake = Faker()
        name = fake.name()
        e_type = random.choice(types)
        if (e_type == "admin"):
            primary = "administration"
            secondary = "administration"
            location = "Administrative Department"
        else:
            specs = random.choices(specializations, weights = [3, 3, 2, 1, 2, 1, 2, 3, 3], k = 2)
            primary = specs[0]
            secondary = specs[1]
            location = random.choice(locations)
        password = "admin"
        
        e_id = create_id("EMP", i+1)

        employee = Employees.create(e_id=e_id, e_name=name, e_type=e_type, primary_specialization=primary, secondary_specialization=secondary, location=location, password=password)

