# Aws lambda talk how to get user by id in dynamo

devolver un objeto vacio si el usuario no está activo

Usuarios existentes:

```json
[
    {
        "userName": "Ivan",
        "active": false,
        "role": "admin",
        "userId": "53830990-0648-11ea-b462-0d12a5f4d5ff",
        "userSurname": "Megias"
    },
    {
        "userName": "German",
        "active": true,
        "role": "user",
        "userId": "3c9c32e0-0663-11ea-bb31-0f32554f313b",
        "userSurname": "Rodriguez"
    },
    {
        "userName": "Eric",
        "active": false,
        "role": "user",
        "userId": "e9f13b40-065c-11ea-b539-413f71cd1eee",
        "userSurname": "Lara"
    },
    {
        "userName": "Jose",
        "active": true,
        "role": "admin",
        "userId": "cec4cc70-0647-11ea-99b5-91f4ad56f3c9",
        "userSurname": "Lara"
    },
    {
        "userName": "Luis",
        "active": true,
        "role": "admin",
        "userId": "e52f2e10-0656-11ea-b8c3-ad5d91623fe5",
        "userSurname": "Prieto"
    }
]
```