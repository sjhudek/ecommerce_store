const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Import the Product model
const Product = require('./Product'); imported

// Import the Tag model
const Tag = require('./Tag'); 


class ProductTag extends Model {}

// Define table columns and configuration
ProductTag.init(
  // Define table columns and configuration
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define a product_id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // product model
        model: Product,
        // primary key of the referenced model
        key: 'id',
      },
    },
    // Define a tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id',
      },
    },
  },
  // Configure metadata, including naming conventions
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;