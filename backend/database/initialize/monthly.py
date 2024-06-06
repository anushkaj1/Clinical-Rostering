import sys
sys.path.append('./')
from schema import Monthly
from functions import create_id

# e_id, shifts_for_the_month
def add_to_monthly():
    for i in range(200):
        e_id = create_id("EMP", i+1)
        emp_work_done = Monthly.create(e_id=e_id, shifts_for_the_month=5)

def reset_month():
    query = (Monthly
             .update({Monthly.shifts_for_the_month:5})
             .where(Monthly.shifts_for_the_month!=5))
    query.execute()

