const { Category } = require("../../models");

const seedCategories = async () => {
  try {
    // An array of category names is created
    const categories = [Electronics, Clothing, Home, Food, Toys, Tools];
    // The categories array is mapped through
    // For each category in the array, the category_name column is set to the category name
    // The result is an array of objects which is passed to the bulkCreate method to create data in the Category Model
    const categoryData = await Category.bulkCreate(
      categories.map((category) => ({ category_name: category }))
    );
    return categoryData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedCategories;
