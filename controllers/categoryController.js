const { Category } = require("../models");

// This is an async function called getAllCategories
// It is called when a user makes a GET request to /api/categories
const getAllCategories = async (req, res) => {
  try {
    // The findAll method is a sequelize method that will find all of the data from the Category Model
    // It is then stored in the categoryData variable
    const categoryData = await Category.findAll();
    // The data is then sent as a json to the client
    res.json(categoryData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to get all categories" });
  }
};

// This is an async function called getCategoryById
// It is called when a user makes a GET request to /api/categories/:id
const getCategoryById = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const id = req.params.id;
    // The findByPk method is a sequelize method that will find one piece of data from the Category Model
    // where the id is equal to what is specified in the req.params
    const categoryData = await Category.findByPk(id);
    // If no data is found, a 404 status is sent to the client with a json message
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    // If the data is found, it is sent as a json to the client
    res.json(categoryData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to get category by id" });
  }
};

// Function that creates a new category
const createCategory = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to create category" });
  }
};

// Function that updates a category by id
const updateCategory = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to update category" });
  }
};
// Function that deletes a category by id
const deleteCategory = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to delete category" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
