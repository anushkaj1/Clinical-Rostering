import random
import sys
from peewee import *

sys.path.append('./')
from schema import Constraints, Employees, Shifts
from functions import create_id

# e-id, desirable_slot, undesirable_slot
def add_to_constraints():
    for i in range(10):
        e_id = create_id("EMP", i+1)
        query = (Employees
                 .select()
                 .where(Employees.e_id == e_id))
        loc = query[0].location

        if (loc != "Administrative Department"):
            query = (Shifts
                    .select()
                    .where(Shifts.location == loc))
            
            shifts = []
            for shift in query:
                shifts.append(shift.shift_id)

            slots = random.sample(shifts, k = 2)

            emp_constraint = Constraints.create(e_id=e_id, desirable_slot=slots[0], undesirable_slot=slots[1])
            
