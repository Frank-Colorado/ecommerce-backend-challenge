require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./routes");

const sequelize = require("./config/connection");

// MIDDELWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use(routes);

// default response for any other request (Not Found) Catch all
app.use("*", (req, res) => {
  res.status(404).send("404 Error");
});

// START SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
