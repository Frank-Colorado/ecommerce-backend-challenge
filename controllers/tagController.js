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

// This is an async function called getTagById
// It is called when a user makes a GET request to /api/tags/:id
const getTagById = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const { id } = req.params;
    // The findByPk method is a sequelize method that will find one piece of data from the Tag Model
    // where the id is equal to what is specified in the req.params
    const tagData = await Tag.findByPk(id);
    // If no data is found, a 404 status is sent to the client with a json message
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    // If the data is found, it is sent as a json to the client
    res.json(tagData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to get tag by id" });
  }
};

// This is an async function called createTag
// It is called when a user makes a POST request to /api/tags
const createTag = async (req, res) => {
  try {
    // req.body is destructured and stored in a variables
    const { tag_name } = req.body;
    // The create method is a sequelize method that will create a new piece of data in the Tag Model
    const tagData = await Tag.create({ tag_name });
    // The new data is sent as a json to the client
    res.json(tagData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to create tag" });
  }
};

// This is an async function called updateTag
// It is called when a user makes a PUT request to /api/tags/:id
const updateTag = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const { id } = req.params;
    // req.body is destructured and stored in a variables
    const { tag_name } = req.body;
    // The update method is a sequelize method that will update a piece of data in the Tag Model
    // where the id is equal to what is specified in the req.params
    const tagData = await Tag.update({ tag_name }, { where: { id } });
    // If no data is found, a 404 status is sent to the client with a json message
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    // The updated data is sent as a json to the client
    res.json(tagData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
    console.log({ error });
    res.status(500).json({ error: "Failed to update tag" });
  }
};

// This is an async function called deleteTag
// It is called when a user makes a DELETE request to /api/tags/:id
const deleteTag = async (req, res) => {
  try {
    // The id from req.params is stored in a variable called id
    const { id } = req.params;
    // The destroy method is a sequelize method that will delete a piece of data in the Tag Model
    // where the id is equal to what is specified in the req.params
    const tagData = await Tag.destroy({ where: { id } });
    // If no data is found, a 404 status is sent to the client with a json message
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    // The deleted data is sent as a json to the client
    res.json(tagData);
  } catch (error) {
    // If there is an error, the error is logged and a 500 status is sent to the client with a json message
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
