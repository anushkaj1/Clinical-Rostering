from pydantic import BaseModel
import employee, schedule

class Leaves(BaseModel):
    leave_id = str
    schedule_id = schedule
    date = str
    reason = str
    shift_alloted_to = employee