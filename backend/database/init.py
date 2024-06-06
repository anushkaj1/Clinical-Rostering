import psycopg2

connection = psycopg2.connect(
    user='postgres',
    password='metro',
    host='localhost',
    port= '5432',
)
connection.autocommit = True

cursor = connection.cursor()

sql = '''CREATE database Hospital''';

cursor.execute(sql)
print("Database created successfully!")

connection.close()