const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Category Associations
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Product Associations
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.hasMany(ProductTag, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Tag Associations
Tag.hasMany(ProductTag, {
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

// ProductTag Associations
ProductTag.belongsTo(Product, {
  foreignKey: "product_id",
});

ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id",
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
