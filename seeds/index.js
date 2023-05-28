const seedCategories = require("./seeders/seedCategories");
const seedProducts = require("./seeders/seedProducts");
const seedTags = require("./seeders/seedTags");
const seedProductTags = require("./seeders/seedProductTags");
const seedDb = async () => {
  try {
    // -----Seed Category Model-----
    // An array of category names is created
    const categories = [Electronics, Clothing, Home, Food, Toys, Tools];
    // The categories array is mapped through
    // For each category in the array, the category_name column is set to the category name
    // The result is an array of objects which is passed to the bulkCreate method to create data in the Category Model
    const categoryData = await Category.bulkCreate(
      categories.map((category) => ({ category_name: category }))
    );
    console.log({ categoryData });

    // -----Seed Product Model-----
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
    console.log({ productData });

    // -----Seed Tag Model-----
    // An array of tag names is created
    const tags = [New, Sale, Trending, Popular, Seasonal, Limited];
    // The tags array is mapped through
    // For each tag in the array, the tag_name column is set to the tag name
    // The result is an array of objects which is passed to the bulkCreate method to create data in the Tag Model
    const tagData = await Tag.bulkCreate(
      tags.map((tag) => ({ tag_name: tag }))
    );
    console.log({ tagData });

    // -----Seed ProductTag Model-----
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

seedDb();
