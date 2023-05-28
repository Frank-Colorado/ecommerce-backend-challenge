const router = require("express").Router();
const {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} = require("../../../controllers/tagController");

// Routing for the path /api/tags
router
  .route("/")
  // Get all tags
  .get(getAllTags)
  // Create a new tag
  .post(createTag);

// Routing for the path /api/tags/:id
router
  .route("/:id")
  // Get a single tag by its `id`
  .get(getTagById)
  // Update a tag by its `id`
  .put(updateTag)
  // Delete a tag by its `id`
  .delete(deleteTag);

module.exports = router;
