from peewee import *

db = PostgresqlDatabase('hospital', user='postgres', password='abcd1234', 
                        host='localhost', port=5432)

db.connect()

class BaseModel(Model):
    class Meta:
        database = db

class Employees(BaseModel):
    e_id = CharField(primary_key=True)
    e_name = CharField()
    e_type = CharField()
    primary_specialization = CharField()
    secondary_specialization = CharField(null=True)
    location = CharField()
    password = CharField()

class Shifts(BaseModel):
    shift_id = CharField(primary_key=True)
    day = CharField()
    time_slot_start = TimeField()
    time_slot_end = TimeField()
    location = CharField()

class Schedule(BaseModel):
    schedule_id = CharField(primary_key=True)
    shift_id = CharField(null=True)
    e_id = CharField(null=True)

    class Meta:
        constraints = [SQL('FOREIGN KEY(shift_id) '
                           'REFERENCES Shifts(shift_id)'),
                        SQL('FOREIGN KEY(e_id) '
                           'REFERENCES Employees(e_id)')]

class Leaves(BaseModel):
    leave_id = CharField(primary_key=True)
    schedule_id = CharField()
    date = DateField()
    reason = TextField()
    shift_allotted_to = CharField(null=True)
    approved = CharField(null=True)

    class Meta:
        constraints = [SQL('FOREIGN KEY(schedule_id) '
                           'REFERENCES Schedule(schedule_id)'),
                        SQL('FOREIGN KEY(shift_allotted_to) '
                           'REFERENCES Employees(e_id)')]
        
class Constraints(BaseModel):
    e_id = CharField()
    desirable_slot = CharField()
    undesirable_slot = CharField()

    class Meta:
        constraints = [SQL('FOREIGN KEY(e_id) '
                           'REFERENCES employees(e_id)'),
                        SQL('FOREIGN KEY(desirable_slot) '
                           'REFERENCES shifts(shift_id)'),
                        SQL('FOREIGN KEY(undesirable_slot) '
                           'REFERENCES shifts(shift_id)')]

class Monthly(BaseModel):
    e_id = CharField(primary_key=True)
    shifts_for_the_month = IntegerField()

    class Meta:
        constraints = [SQL('FOREIGN KEY(e_id) '
                           'REFERENCES employees(e_id)')]

db.close()
