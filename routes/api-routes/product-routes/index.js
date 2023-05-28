const router = require("express").Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../../controllers/productController");

// Routing for the path /api/products
router
  .route("/")
  // Get all products
  .get(getAllProducts)
  // Create a new product
  .post(createProduct);

// Routing for the path /api/products/:id
router
  .route("/:id")
  // Get a single product by its `id`
  .get(getProductById)
  // Update a product by its `id`
  .put(updateProduct)
  // Delete a product by its `id`
  .delete(deleteProduct);

module.exports = router;
