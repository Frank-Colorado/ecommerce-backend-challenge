const router = require("express").Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../../../controllers/categoryController");

// Routing for the path /api/categories
router
  .route("/")
  // Get all categories
  .get(getAllCategories)
  // Create a new category
  .post(createCategory);

// Routing for the path /api/categories/:id
router
  .route("/:id")
  // Get a single category by its `id`
  .get(getCategoryById)
  // Update a category by its `id`
  .put(updateCategory)
  // Delete a category by its `id`
  .delete(deleteCategory);

module.exports = router;
