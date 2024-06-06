import psycopg2

connection = psycopg2.connect(
#    database="hospital",
    user='postgres',
    password='abcd1234',
    host='localhost',
    port= '5432'
)
connection.autocommit = True

cursor = connection.cursor()

sql = '''DROP database hospital'''

cursor.execute(sql)
print("Database deleted successfully!")

connection.close()
