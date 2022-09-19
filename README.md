POPULIX BACKEND NODEJS
==============

Setup
------------

1. Copy "env_example" file to .env
2. Edit .env file to match development configuration
3. Copy "database/config/config_example.json" file to "database/config/config.json"
4. Edit config.json file to match development configuration
5. run yarn install
6. Edit config.json in "database/config.json" to match local development configuration
7. Add schedules_data.csv and prices_data.csv to "database/seeds_data" before run db:seed if you need data in db
8. npx sequelize-cli db:migrate 
9. npx sequelize-cli db:seed:all
10. npm start
11. npm test


Features
------------

1. Login
2. PropertyDELETE,GET

Documentation
------------
link postman:

Note
------------
1. npx sequelize-cli model:generate --name User --attributes firstName:string (create query for add table in db)
2. npx sequelize-cli db:migrate (run query)