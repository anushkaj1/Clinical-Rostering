from peewee import *
from datetime import *
from faker import Faker
import random
import sys
sys.path.append('./')
from schema import Employees, Shifts, Schedule, Leaves, Constraints, Monthly
from employees import add_to_employees
from shifts import add_to_shifts
from constraints import add_to_constraints
from monthly import add_to_monthly

db = PostgresqlDatabase('hospital', user='postgres', password='abcd1234', 
                        host='localhost', port=5432)

db.connect()

db.create_tables([Employees])
db.create_tables([Shifts])
db.create_tables([Schedule])
db.create_tables([Leaves])
db.create_tables([Constraints])
db.create_tables([Monthly])

Faker.seed(1114)
random.seed(1114)

add_to_employees()
add_to_shifts()
add_to_constraints()
add_to_monthly()

db.close()
