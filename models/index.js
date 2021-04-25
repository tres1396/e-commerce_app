// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_name" //this could be wrong?? FIXME
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_name" //this could be wrong?? FIXME
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "tag_name" //this could be wrong?? FIXME
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "product_name" //this could be wrong?? FIXME
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
