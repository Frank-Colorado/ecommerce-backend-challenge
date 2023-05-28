const { Product, Category } = require("../../models");
const { faker } = require("@faker-js/faker");

const seedProducts = async () => {
  try {
    // The findAll method is used to get all categories that were created in the previous step
    // The result is an array
    // We need the length of the array to use in the faker.number.int method
    const allCategories = await Category.findAll();
    // The Array.from method is used to create an array of 50 elements
    // The map method is used to create an object for each element in the array
    // faker is used to create fake data for each object
    // Each object is returned and added to the products array
    const products = Array.from({ length: 50 }).map(() => ({
      product_name: faker.commerce.productName(),
      price: faker.commerce.price(),
      stock: faker.number.int({ min: 1, max: 10 }),
      category_id: faker.number.int({ min: 1, max: allCategories.length }),
    }));
    // The products array is passed to the bulkCreate method to create data in the Product Model
    const productData = await Product.bulkCreate(products);
    return productData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedProducts;
