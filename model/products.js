//products schema definition

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    reuired: true,
  },
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
