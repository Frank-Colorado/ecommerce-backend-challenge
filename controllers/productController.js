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

// Function that gets one product by id
const getProductById = async (req, res) => {
  try {
    // code here
  } catch (error) {
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
