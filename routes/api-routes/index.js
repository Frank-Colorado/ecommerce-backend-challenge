const router = require("express").Router();

// Product routes
const productRoutes = require("./product-routes");
router.use("/products", productRoutes);

// Tag routes
const tagRoutes = require("./tag-routes");
router.use("/tags", tagRoutes);

// Category routes
const categoryRoutes = require("./category-routes");
router.use("/categories", categoryRoutes);

module.exports = router;
