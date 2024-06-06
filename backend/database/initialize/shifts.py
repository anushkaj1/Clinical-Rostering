import sys
sys.path.append('./')
from schema import Shifts
from functions import create_id

# shift_id, day, time_slot_start, time_slot_end, location
def add_to_shifts():
    times = [['00:00:00', '7:59:59'], ['08:00:00', '15:59:59'],
            ['16:00:00', '00:59:59']]

    days = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"]

    locations = ["ICU", "OPD", "Emergency", "Inpatient Service", 
                "Medical Department", "Paramedical Department",
                "Rehabilitation Department", "Operation Theatre (OT)"]

    shift_no = 1
    for i in range(7):
        for j in range(3):
            for k in range(len(locations)):
                shift_id = create_id("SFT", shift_no)

                shift = Shifts.create(shift_id=shift_id, day=days[i], time_slot_start=times[j][0], time_slot_end=times[j][1], location=locations[k])

                shift_no += 1
