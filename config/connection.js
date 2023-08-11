require('dotenv').config();

const Sequelize = require('sequelize');

// Create connection to our database, pass in your MySQL information for username and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_DATABASE, // Updated this
    process.env.DB_USERNAME, // And this
    process.env.DB_PASSWORD, {
      host: process.env.DB_HOST, // Don't forget the host as well
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


module.exports = sequelize;
