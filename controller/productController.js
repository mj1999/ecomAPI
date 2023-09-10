const Products = require("../model/products");

//function call to list all products
module.exports.view = async function (req, res) {
  try {
    let products = await Products.find().select(["name", "quantity", "_id"]);
    res.status(200).json({
      data: { products },
    });
  } catch (err) {
    res.status(500).json({
      message: "Unable to list the products, Internal Server error - " + err,
    });
  }
};

//function call to create new products
module.exports.create = async function (req, res) {
  try {
    let newProduct = await Products.create(req.body);
    res.status(200).json({
      data: {
        product: {
          name: newProduct.name,
          quantity: newProduct.quantity,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Unable to create the product, Internal Server error - " + err,
    });
  }
};

//function call to delete product by id passed as parameter
module.exports.delete = async function (req, res) {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json({
      data: {
        message: "product deleted",
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Unable to delete the product, Internal Server error - " + err,
    });
  }
};

//function call to update product quantity for the product id passed as parameter
module.exports.update = async function (req, res) {
  try {
    let product = await Products.findByIdAndUpdate(
      req.params.id,
      { quantity: req.query.number },
      { returnDocument: "after" }
    );
    res.status(200).json({
      data: { product, message: "Updated successfully" },
    });
  } catch (err) {
    res.status(500).json({
      message: "Unable to update the product, Internal Server error - " + err,
    });
  }
};
