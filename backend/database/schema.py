import psycopg2

connection = psycopg2.connect(
   database="hospital",
    user='postgres',
    password='metro',
    host='localhost',
    port= '5432'
)
connection.autocommit = True
print("Database accessed!")

cursor = connection.cursor()

sql = '''CREATE TABLE employees(
        e_id varchar(15) PRIMARY KEY,
        e_name varchar(50) NOT NULL,
        e_type varchar(50) NOT NULL,
        primary_specialization varchar(50) NOT NULL,
        secondary_specialization varchar(50),
        location varchar(50) NOT NULL,
        password varchar(50) NOT NULL
    )''';
cursor.execute(sql)

# time format HH:MM:SS
sql = '''CREATE TABLE time_slots(
        time_slot_id int PRIMARY KEY,
        time_slot_start time NOT NULL,
        time_slot_end time NOT NULL
    )''';
cursor.execute(sql)

sql = '''CREATE TABLE shifts(
        shift_id varchar(15) PRIMARY KEY,
        day char(15) NOT NULL,
        time_slot_id int NOT NULL REFERENCES time_slots (time_slot_id)
    )''';
cursor.execute(sql)

sql = '''CREATE TABLE schedule_slots(
        schedule_slot_id varchar(15) PRIMARY KEY,
        shift_id varchar(15) NOT NULL REFERENCES shifts (shift_id),
        location varchar(50) NOT NULL
    )'''
cursor.execute(sql)

sql = '''CREATE TABLE schedule(
        schedule_id varchar(15) PRIMARY KEY,
        schedule_slot_id varchar(15) NOT NULL REFERENCES schedule_slots (schedule_slot_id),
        e_id varchar(15) NOT NULL REFERENCES employees (e_id)
    )''';
cursor.execute(sql)

# date format YYYY:MM:DD
# set shift_allotted_to NA if no employee available
# otherwise NULL value indicates that leave has not been processed yet
sql = '''CREATE TABLE leaves(
        leave_id varchar(15) PRIMARY KEY,
        schedule_id varchar(15) NOT NULL REFERENCES schedule (schedule_id),
        date date NOT NULL,
        reason char NOT NULL,
        shift_allotted_to varchar(15) REFERENCES employees (e_id)
    )''';
cursor.execute(sql)

# sql = '''CREATE TABLE leave_approval(
#         leave_id varchar(15) PRIMARY KEY REFER,
#         shift_allotted_to varchar(15)
#     )''';
# cursor.execute(sql)

sql = ''''''

connection.close()