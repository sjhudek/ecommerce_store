# 13 Object-Relational Mapping (ORM): E-Commerce Back End
## User Story

As a manager at an internet retail company, having a robust e-commerce platform is paramount to staying competitive. This project focuses on the development of the back-end (or server side) of our e-commerce application. The application is structured into three main sections: (1) Products, (2) Categories, and (3) Tags.

Within the app, users have the capability to perform a range of operations, ensuring a comprehensive and user-friendly experience. To maintain technological relevance and efficiency, the database leverages advanced back-end technologies, including Node.js, Express, and the Sequelize ORM (Object Relational Management). This guarantees a cutting-edge platform ready to compete with leading e-commerce companies.

## Acceptance Criteria
Engage with our Express.js API:

    - Kickstart with Ease:
        - Simply input your database name, MySQL username, and password into an environment variable file.
        - Get connected effortlessly with your database via Sequelize.

    - Set Up Your Development Environment:
        - Run schema and seed commands.
        - Instantly set up a development database seeded with test data.

    - Launch Your Application:
        - Use our command to initiate the application.
        - Your server springs to life, syncing Sequelize models with the MySQL database.

    - Explore and Interact:
        - Open API GET routes for categories, products, or tags in Insomnia.
        - Revel in neatly formatted JSON data presentations.

    - Test and Modify with Confidence:
        - Employ API POST, PUT, and DELETE routes in Insomnia.
        - Effortlessly create, update, or erase database data.
  
## Usage
Follow these steps to use the app. This is not meant to be a high-level guide, not a comprehensive tutorial. That would entail amuch more detailed explanation than we have space for here. Therefore, some steps are missing.
- 1. You must have the following installed so the app will operate properly:
  - Express
  - Node
  - Sequelize
  - MySQL2
- 2. To iniitialize the database, you must first initialize MySQL.
  - In the CLI, enter 'mysql -u yourusername -p
    - Insert your real user name in place of yourusername
  - Create the database
    - This app uses 'ecommerce_db' as the database name.
    - Enter 'CREATE DATABASE ecommerce_db' to create the database
  - Create the database contents
    - Enter 'SOURCE db/schema.sql'
    - Then, 'SOURCE db/seeds.sql'
  - The database is created!!
  - Exit MySQL
    - Enter "exit' or 'quit'
- 3. Start the server and connect
  - Enter 'node server' to start the server
  - Open Insomnia, Postman or a similar app
  - In the URL bar enter 'GET localhost:3001/api/products'
    - You should get a list of the products in the database
  - Do the same for categories and tags
  - To add, delete, update and create enter
    - Add
      - GET localhost:3001/api/products
    - Delete
      - DEL localhost:3001/api/products/1
        - '1' is the 'ID'
    - Update
      - PUT localhost:3001/api/products/1
    - Create
      - POST localhost:3001/api/products/1

Hopefully that helps somewhat!

## YouTube Walk Through Video Link
- https://youtu.be/AOM6bIKzxbo

## GitHub Repository
- https://github.com/sjhudek/ecommerce_store

## Resources / Inspiration
- AskBCS Learning Assistant
- https://www.youtube.com/watch?v=3qlnR9hK-lQ
- https://www.youtube.com/watch?v=pxo7L5nd1gA
- https://sequelize.org/
- https://sequelize.org/docs/v6/getting-started/
- https://levelup.gitconnected.com/the-ultimate-guide-to-get-started-with-sequelize-orm-238588d3516e
- https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
- https://www.bezkoder.com/sequelize-associate-one-to-many/
- https://stackoverflow.com/questions/62170071/
- https://stackoverflow.com/questions/62170071/sequelize-belongsto-called-with-something-thats-not-a-subclass-of-sequelize-mo
- https://www.youtube.com/watch?v=G4e15f7qfVs
  
