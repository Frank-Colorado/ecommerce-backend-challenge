const { ProductTag, Product, Tag } = require("../../models");
const { faker } = require("@faker-js/faker");

const seedProductTags = async () => {
  try {
    // For seeding the ProductTag Model, I wanted to create realistic data where each product has a random number of tags
    // and each tag is assigned to a random number of products off the associates that I delcared in the models/index.js file
    // Since both have many to many relationships
    // The finaAll method is used to get all products and tags that were created in the previous steps
    // Promise.all is used to wait for both queries to finish which returns an array of arrays
    // The array of arrays is destructured into two variables
    const [allProducts, allTags] = await Promise.all([
      Product.findAll(),
      Tag.findAll(),
    ]);
    // The allProducts array is mapped through
    const productTags = allProducts.map((product) => {
      // for each product, the faker.helpers.arrayElements method is used to create an array of random tags from the allTags array
      const randomTags = faker.helpers.arrayElements(allTags, {
        // Each product will have a random number of tags between 1 and the length of the allTags array
        min: 1,
        max: allTags.length,
      });
      // The randomTags array is mapped through
      return randomTags.map((tag) => ({
        // For each tag, an object is created with the product id and tag id
        // This will be the data for the ProductTag Model
        product_id: product.id,
        tag_id: tag.id,
      }));
    });
    // The productTags array is an array of arrays so the flat method is used to flatten the array into a single array
    // The productTags array is passed to the bulkCreate method to create data in the ProductTag Model
    const productTagData = await ProductTag.bulkCreate(productTags.flat());
    console.log({ productTagData });
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedProductTags;
