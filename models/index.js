// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // Foreign key in the ProductTag table referencing Product
  otherKey: 'tag_id', // Foreign key in the ProductTag table referencing Tag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // Foreign key in the ProductTag table referencing Tag
  otherKey: 'product_id', // Foreign key in the ProductTag table referencing Product
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
