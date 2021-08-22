## SAMPLE NODEJS API

NOTE: Except creating user all endpoints must include token header {"Authorization" : <Token from login>}


# Users
List of Users: GET http://127.0.0.1:8000/api/users
Create User Record: POST http://127.0.0.1:8000/api/users
                        Sample Body: {"name":"Daniel Simiyu", "username":"simiyu", "password":"simiyu17"}
Find User By ID: GET http://127.0.0.1:8000/api/users/{ID}
Delete User By ID: DELETE http://127.0.0.1:8000/api/users/{ID}
Login to get token: POST http://127.0.0.1:8000/api/users/login
                        Sample Body: {"username":"simiyu", "password":"simiyu17"}

# Students
List of Students: GET http://127.0.0.1:8000/api/students
Create Student Record: POST http://127.0.0.1:8000/api/students
                        Sample Body: {"first_name":"Daniel", "surname":"Simiyu", "city":"Nairobi", "dob":"1920-03-12"}
Find student By ID: GET http://127.0.0.1:8000/api/students/{ID}
Delete student By ID: DELETE http://127.0.0.1:8000/api/students/{ID}