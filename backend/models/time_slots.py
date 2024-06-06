from pydantic import BaseModel
from datetime import time

class TimeSlot(BaseModel):
    time_slot_id: str
    time_slot_start: str
    time_slot_end: str
