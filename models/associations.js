// associations.js

const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  // as: 'products', // optional alias for querying
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Add other associations as needed...
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  foreignKey: 'product_id',
});

module.exports = { Category, Product }; // ... and other models as well
