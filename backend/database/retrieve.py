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

sql = "delete from employees where e_id = %s; "

cursor.execute(sql, ('Emp_02', ))

rows = cursor.rowcount;
records = cursor.fetchall()
print(rows)
for record in records:
    print(record)
# print(records)