const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/dbconfig");

//for decoding form data
app.use(express.urlencoded());

//route information
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error running server --- ", err);
    return;
  }
  console.log("Server started on port", port);
});
