import sys
from peewee import *
from random import *

sys.path.append('./')
from schema import Employees, Shifts, Schedule, Constraints
from functions import create_id

# schedule_id, shift_id, e_id
# check for people in the same category as having same type and location
# see how 21 shifts can be divided among the given number of peopls
# now allot the shifts as per preferences
# an undesired shift is never allotted to someone
# everyone should have exactly 5 shifts in a week
# no one should have more than 6 shifts in a week - with leaves
# an employee can take up to 4 leaves in a month
# no employee will come to work for more than 30 shifts in a week

# allot each employee all 3 preferred shifts
# assign preference points
# find what is the max number of employees that can go to each shift
# if being violated, randomly shift 1 user with max preference point
# to shift with least employees
# change preference points accordingly
# repeat the process until max per shift not being violated


def add_to_schedule():
    NO_OF_SHIFTS = 21
    types = ["nurse", "physician", "surgeon"]
    locations = ["ICU", "OPD", "Emergency", "Inpatient Service", 
                "Medical Department", "Paramedical Department",
                "Rehabilitation Department", "Operation Theatre (OT)"]
    
    counter = 1
    for i in range(len(types)):
        typ = types[i]
        for j in range(len(locations)):
            loc = locations[j]

            # fetching required data
            slots = []
            shifts = []

            query = (Shifts
                      .select()
                      .where(Shifts.location == loc))
            
            for shift in query:
                shifts.append([shift.shift_id, 0])

            e_ids = []
            preference_points = []
            desired = []
            undesired = []

            query2 = (Employees
                     .select()
                     .where(Employees.location == loc, Employees.e_type == typ))
            
            for emp in query2:
                ppoints = 0
                e_ids.append(emp.e_id)
                query3 = (Constraints
                          .select()
                          .where(Constraints.e_id == emp.e_id))
                
                slot = []

                # allotting initial slots
                from_ = []

                for k in range(len(shifts)):
                    if (query3[0].desirable_slot == shifts[k][0]):
                        desired.append(k)

                        slot.append(k)
                        shifts[k][1] += 1
                        ppoints += 1

                    elif (query3[0].undesirable_slot == shifts[k][0]):
                        undesired.append(k)

                    else:
                        from_.append(k)

                others = choices(from_, k = 5)
                for k in range(5):
                    slot.append(others[k])
                    shifts[others[k]][1] += 1
                
                slots.append(slot)
                preference_points.append(ppoints)
                # print(emp.e_id, slot)

            num_emp = len(query)
            emp_per_shift_max = (num_emp * 5)//NO_OF_SHIFTS + 1
         
            # checking if any slot has more than max number of people allotted to it
            # making changes until condition satisfied
            iterations = 0
            while(1):
                if iterations >= 10:
                    break

                flag = 0
                for k in range(len(shifts)):
                    iterations2 = 0
                    while shifts[k][1] > emp_per_shift_max:
                        if iterations2 >= 10:
                            break

                        flag = 1
                        # flag2 = 0

                        # find employee with this shift not as preferred shift
                        for x in range(len(slots)):
                            slot = slots[x]
                            from_ = []
                            for y in range(1, len(slot)):
                                if slot[y] == k:
                                    add_slot = shifts.index(min(shifts))
                                    if add_slot not in slot and add_slot != undesired[x]:
                                        slot[y] = add_slot
                                        shifts[add_slot][1] += 1
                                    # for z in range(NO_OF_SHIFTS):
                                    #     if z not in slot and undesired[x] != k:
                                    #         from_.append(z)
                                    # slot[y] = choices(from_, k = 2)

                        iterations2 += 1

                if flag == 0:
                    break

                iterations += 1


            # adding schedule to schedule table
            # schedule_id, shift_id, e_id
            for emp in range(len(e_ids)):
                e_id = e_ids[emp]
                slot = slots[emp]
                for entry in slot:
                    shift_id = shifts[entry][0]
                    schedule_id = create_id("SCH", counter)
                    counter += 1
                    Schedule.create(schedule_id=schedule_id, shift_id=shift_id, e_id=e_id)

add_to_schedule()
