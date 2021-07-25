const bcrypt = require("bcryptjs");
const categoryModel = require("../models/categoryModel");
const jwt = require("jsonwebtoken");

exports.getAllCategory = async (req, res, next) => {
  const cat = await categoryModel.distinct("name");
  res.status(200).json({
    category: cat,
  });
};
exports.addcategory = async (req, res, next) => {
  const { name } = req.body;

  try {
    const exsitCat = await categoryModel.findOne({ name: name });

    if (exsitCat) {
      const error = new Error(
        "category already exist, please pick add category!"
      );
      res.status(409).json({
        error: "category already exist, please pick add category! ",
      });
      error.statusCode = 409;
      throw error;
    }
    const category = new categoryModel({
      name: name,
    });
    const result = await category.save();
    res.status(200).json({
      message: "cat created",
      category: name,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
