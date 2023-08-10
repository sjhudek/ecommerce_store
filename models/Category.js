const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Product = require('./Product'); // Import the Product model if not already imported

class Category extends Model {}

// Define table columns and configuration
Category.init(
  // Define table columns and configuration
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define a category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // Configure metadata, including naming conventions
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Define association between Category and Product
Category.hasMany(Product, {
  foreignKey: 'category_id', // This should match the column name in the Product model
});

module.exports = Category;
