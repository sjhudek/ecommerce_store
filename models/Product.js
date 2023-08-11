// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const Category = require('./Category');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // Define table columns and configuration
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define a product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define a price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Define a stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // Define a category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category, // This should be the Category model
        key: 'id', // This should be the primary key of the referenced model
      },
    },
  },
  // Configure metadata, including naming conventions
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
