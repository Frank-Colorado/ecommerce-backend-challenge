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
    const { id } = req.params;
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

// This is an async function called createCategory
// It is called when a user makes a POST request to /api/categories
const createCategory = async (req, res) => {
  try {
    // req.body is destructured
    const { category_name } = req.body;
    // The create method is a sequelize method that will create a new piece of data in the Category Model
    const categoryData = await Category.create({ category_name });
    // The new data is sent as a json to the client
    res.json(categoryData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to create category" });
  }
};

// This is an async function called updateCategory
// It is called when a user makes a PUT request to /api/categories/:id
const updateCategory = async (req, res) => {
  try {
    // req.body is destructured
    const { category_name } = req.body;
    // req.params is destructured
    const { id } = req.params;
    // The update method is a sequelize method that will update a piece of data in the Category Model
    // where the id is equal to what is specified in the req.params
    const categoryData = await Category.update(
      { category_name },
      { where: { id } }
    );
    // If no data is found, a 404 status is sent to the client with a json message
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    // The updated data is sent as a json to the client
    res.json(categoryData);
  } catch (error) {
    console.log({ error });
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    res.status(500).json({ error: "Failed to update category" });
  }
};
// This is an async function called deleteCategory
// It is called when a user makes a DELETE request to /api/categories/:id
const deleteCategory = async (req, res) => {
  try {
    // req.params is destructured
    const { id } = req.params;
    // The destroy method is a sequelize method that will delete a piece of data in the Category Model
    // where the id is equal to what is specified in the req.params
    const categoryData = await Category.destroy({ where: { id } });
    // If no data is found, a 404 status is sent to the client with a json message
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    // The deleted data is sent as a json to the client
    res.json(categoryData);
  } catch (error) {
    console.log({ error });
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    res.status(500).json({ error: "Failed to delete category" });
  }
};

// The CRUD functions are exported to be used in the categoryRoutes.js file
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
