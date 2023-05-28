const { Tag } = require("../models");

// Function that gets all tags
const getAllTags = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to get all tags" });
  }
};

// Function that gets one tag by id
const getTagById = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to get tag by id" });
  }
};

// Function that creates a new tag
const createTag = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to create tag" });
  }
};

// Function that updates a tag by id
const updateTag = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to update tag" });
  }
};

// Function that deletes a tag by id
const deleteTag = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to delete tag" });
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
