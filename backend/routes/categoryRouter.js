const express = require('express');
const categoryController = require("../controllers/categoryController");
const router = express.Router();
var isAuth = require('../middleware/isAuth.js')

router.use(isAuth)
router.post("/category", categoryController.addcategory);
router.get("/category", categoryController.getAllCategory);

module.exports = router;
