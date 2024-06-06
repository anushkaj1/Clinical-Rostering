import psycopg2
# from peewee import PostgresqlDatabase

connection = psycopg2.connect(
    user='postgres',
    password='abcd1234',
    host='localhost',
    port= '5432'
)

# db = PostgresqlDatabase('hospital', user='postgres', password='abcd1234',
#                            host='localhost', port=5432)
connection.autocommit = True

cursor = connection.cursor()

sql = '''CREATE database Hospital''';

cursor.execute(sql)
print("Database created successfully!")

connection.close()

