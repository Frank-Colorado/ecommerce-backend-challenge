const router = require("express").Router();

// api routes
const apiRoutes = require("./api-routes");
router.use("/api", apiRoutes);

module.exports = router;
