// associations.js

const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: 'ProductTag',
  foreignKey: 'product_id',
});

module.exports = { Category, Product };
