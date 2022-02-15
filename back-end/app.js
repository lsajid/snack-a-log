// DEPENDENCIES
const cors = require("cors");
// const express = require("express");
const express = require("express");
const snackController = require("./controllers/snackController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
require("dotenv").config();

// ROUTES
app.use("/snacks", snackController);

// Home routes
app.get("/", (req, res) => {
	res.send("Get Snack'n at Snack-a-log!");
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
