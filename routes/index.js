const express = require("express");
const router = express.Router();

//routing all calls towards the product route where further routing to controller happens
router.use("/products", require("./products"));

module.exports = router;
