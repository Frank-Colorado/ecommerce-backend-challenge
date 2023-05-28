const { Product } = require("../../models");
const { faker } = require("@faker-js/faker");

const seedProducts = async () => {
  try {
    // A product object is created with the faker library for the Product Model
    const productObj = {
      product_name: faker.commerce.productName(),
      price: faker.commerce.price(),
      stock: faker.number(),
      category_id: faker.number({ min: 1, max: categories.length }),
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
