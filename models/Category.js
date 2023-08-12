// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// Set up fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
