# User EndPoints
- [ ] `[GET] /api/user`  =>  this will give you all users
- [ ] `[POST] /api/user/register`  => register new user
- [ ] `[POST] /api/user/login` => login as a user
____________
# market endpoints

- [ ] `[GET] /api/market`  =>  this will give you all users

__________
# item endpoints

- [ ] `[GET] /api/item`  =>  this will give you all items
- [ ] `[POST] /api/item =>  add new item
________________
# USER table

| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | do not provide it when creating projects, the database will generate it     |
| username     | string    | required                                                                    |
| password | string    | required                                                                    |


_______
# ITEM table
| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | do not provide it when creating projects, the database will generate it     |
| item name        | string    | required                                                                    |
| description | string    | required                                                                    |
| completed   | boolean   | not required, defaults to false when creating projects                      |


_______
# MARKET table
| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | do not provide it when creating projects, the database will generate it     |
| market name        | string    | required                                                                    |
                 
