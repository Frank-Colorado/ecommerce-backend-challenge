const { Category } = require("../models");

// Function that gets all categories
const getAllCategories = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to get all categories" });
  }
};

// Function that gets one category by id
const getCategoryById = async (req, res) => {
  try {
    // code here
  } catch (error) {
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
