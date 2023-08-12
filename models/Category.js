// Import sequelize library components and your sequelize connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // adjust path if necessary

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
    }
  },
  {
    sequelize, // Pass the imported sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
