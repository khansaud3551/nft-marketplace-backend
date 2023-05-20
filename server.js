// start express server
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const config = require("./config/database");

// connect to database
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// on connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + "mongodb://localhost:27017");
});

// on error
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

// cors middleware
app.use(cors());

//start server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
