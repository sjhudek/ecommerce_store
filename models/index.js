// models/index.js

const Product = require('./Product');
const Tag = require('./Tag');
const Category = require('./Category');
const ProductTag = require('./ProductTag');
const sequelize = require('../config/connection');  

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

module.exports = {
  sequelize,
  Product,
  Tag,
  Category,
  ProductTag
};
