const seedCategories = require("./seeders/seedCategories");
const seedProducts = require("./seeders/seedProducts");
const seedTags = require("./seeders/seedTags");
const seedProductTags = require("./seeders/seedProductTags");

const sequelize = require("../config/connection");

const seedDb = async () => {
  try {
    // sync sequelize models to the database, then run the seed functions
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    // -----Seed Category Model-----
    await seedCategories();
    console.log("\n----- CATEGORIES SEEDED -----\n");

    // -----Seed Product Model-----
    await seedProducts();
    console.log("\n----- PRODUCTS SEEDED -----\n");
    // -----Seed Tag Model-----
    await seedTags();
    console.log("\n----- TAGS SEEDED -----\n");

    // -----Seed ProductTag Model-----
    await seedProductTags();
    console.log("\n----- PRODUCT TAGS SEEDED -----\n");

    process.exit(0);
  } catch (err) {
    console.log({ err });
  }
};

seedDb();
