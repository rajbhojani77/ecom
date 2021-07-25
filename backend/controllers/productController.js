const bcrypt = require("bcryptjs");
const productModel = require("../models/productModel");
const jwt = require("jsonwebtoken");

exports.getAllProducts = async (req, res, next) => {
  const { name, category,range } = req.query;
  const products = await productModel.find({
    $and: [
      { category: { $regex: new RegExp(category, "i") } },
      { $or: [{ netprice: { $lt: range[1] } }, { qty: { $gt: range[0] } }] },
      { name: { $regex: new RegExp(name, "i") } },
    ],
  });
  res.status(200).json({
    products: products,
  });
};
exports.addProduct = async (req, res, next) => {
  const product = req.body;

  try {
    const newProduct = new productModel(product);
    const result = await newProduct.save();
    res.status(200).json({
      message: "Product created",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.editProduct = async (req, res, next) => {
  const product = req.body;

  try {
    let result = await productModel.findOne({ _id: product._id });
    result.name = product.name;
    result.category = product.category;
    result.image = product.image;
    result.price = product.price;
    result.discount = product.discount;
    result.netprice = product.netprice;
    result.discription = product.discription;
    result.save();
    res.status(200).json({
      message: "Product created",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await productModel.deleteOne({ _id: id });
    res.status(200).json({
      message: "deleted",
      result: result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await productModel.findOne({ _id: id });
    res.status(200).json({
      product: product,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
