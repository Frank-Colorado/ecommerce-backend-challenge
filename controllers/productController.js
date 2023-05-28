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

// Function that creates a new product
const createProduct = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to create product" });
  }
};

// Function that updates a product by id
const updateProduct = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to update product" });
  }
};

// Function that deletes a product by id
const deleteProduct = async (req, res) => {
  try {
    // code here
  } catch (error) {
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
