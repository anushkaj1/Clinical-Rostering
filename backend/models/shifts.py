from pydantic import BaseModel
from datetime import time
import time_slots

class Shifts(BaseModel):
    shift_id = str
    day = str
    time_slot_id = time_slots