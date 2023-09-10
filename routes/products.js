//product routing information
const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.view);
router.post("/create", productController.create);
//product id being passed on as a parameter to the controller
router.delete("/:id", productController.delete);
router.post("/:id/update_quantity/", productController.update);

module.exports = router;
