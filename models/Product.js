// Import sequelize library components and your sequelize connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // adjust path if necessary

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // this should be the name of the table in the database
        key: 'id',
      },
    },
  },
  {
    sequelize, // Pass the imported sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
