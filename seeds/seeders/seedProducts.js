const { Product, Category } = require("../../models");
const { faker } = require("@faker-js/faker");

const seedProducts = async () => {
  try {
    // The findAll method is used to get all categories that were created in the previous step
    // The result is an array
    // We need the length of the array to use in the faker.number.int method
    const allCategories = await Category.findAll();
    // A product object is created with the faker library for the Product Model
    const productObj = {
      product_name: faker.commerce.productName(),
      price: faker.commerce.price(),
      stock: faker.number.int(),
      category_id: faker.number.int({ min: 1, max: allCategories.length }),
    };
    // The product object is passed to the faker.helpers.multiple method to create an array of 50 products
    const products = faker.helpers.multiple(productObj, { count: 50 });
    // The products array is passed to the bulkCreate method to create data in the Product Model
    const productData = await Product.bulkCreate(products);
    return productData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedProducts;
