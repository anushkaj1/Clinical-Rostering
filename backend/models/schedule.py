from pydantic import BaseModel
import schedule_slots
import employee

class Schedule(BaseModel):
    schedule_id = str
    schedule_slot_id = schedule_slot_id
    e_id = employee