const { Product } = require("../models");

// This is an async function called getAllProducts
// It is called when a user makes a GET request to /api/products
const getAllProducts = async (req, res) => {
  try {
    // The findAll method is a sequelize method that will find all of the data from the Product Model
    // It is then stored in the productData variable
    const productData = await Product.findAll();
    // The data is then sent as a json to the client
    res.json(productData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to get all products" });
  }
};

// This is an async function called getProductById
// It is called when a user makes a GET request to /api/products/:id
const getProductById = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const { id } = req.params;
    // The findByPk method is a sequelize method that will find one piece of data from the Product Model
    // where the id is equal to what is specified in the req.params
    const productData = await Product.findByPk(id);
    // If no data is found, a 404 status is sent to the client with a json message
    if (!productData) {
      res.status(404).json({ message: "No product found with this id" });
      return;
    }
    // If the data is found, it is sent as a json to the client
    res.json(productData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to get product by id" });
  }
};

// This is an async function called createProduct
// It is called when a user makes a POST request to /api/products
const createProduct = async (req, res) => {
  try {
    // req.body is destructured and stored in variables
    const { product_name, price, stock, category_id } = req.body;
    // The create method is a sequelize method that will create a new piece of data in the database
    // the destructured req.body is passed into the method
    const productData = await Product.create({
      product_name,
      price,
      stock,
      category_id,
    });
    // The new data is sent as a json to the client
    res.json(productData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to create product" });
  }
};

// This is an async function called updateProduct
// It is called when a user makes a PUT request to /api/products/:id
const updateProduct = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const { id } = req.params;
    // req.body is destructured and stored in variables
    const { product_name, price, stock, category_id } = req.body;
    // The update method is a sequelize method that will update one piece of data in the database
    // the destructured req.body is passed into the method
    const productData = await Product.update(
      {
        product_name,
        price,
        stock,
        category_id,
      },
      {
        where: {
          id,
        },
      }
    );
    // If no data is found, a 404 status is sent to the client with a json message
    if (!productData) {
      res.status(404).json({ message: "No product found with this id" });
      return;
    }
    // The updated data is sent as a json to the client
    res.json(productData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to update product" });
  }
};

// This is an async function called deleteProduct
// It is called when a user makes a DELETE request to /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const { id } = req.params;
    // The destroy method is a sequelize method that will delete one piece of data from the database
    // where the id is equal to what is specified in the req.params
    const productData = await Product.destroy({
      where: {
        id,
      },
    });
    // If no data is found, a 404 status is sent to the client with a json message
    if (!productData) {
      res.status(404).json({ message: "No product found with this id" });
      return;
    }
    // The deleted data is sent as a json to the client
    res.json(productData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to delete product" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
