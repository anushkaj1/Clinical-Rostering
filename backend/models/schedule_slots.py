from pydantic import BaseModel
from datetime import time
import shifts

class ScheduleSlots(BaseModel):
    schedule_slot_id = str
    shift_id = shifts
    location = str
    