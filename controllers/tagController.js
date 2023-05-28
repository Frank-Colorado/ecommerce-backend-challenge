const { Tag } = require("../models");

// This is an async function called getAllTags
// It is called when a user makes a GET request to /api/tags
const getAllTags = async (req, res) => {
  try {
    // The findAll method is a sequelize method that will find all of the data from the Tag Model
    // It is then stored in the tagData variable
    const tagData = await Tag.findAll();
    // The data is then sent as a json to the client
    res.json(tagData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
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
