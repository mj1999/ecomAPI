//database configuration code
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/ecomDB");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error conencting to database ----", err);
});
db.once("open", () => {
  console.log("Connected to Database");
});

module.exports = db;
