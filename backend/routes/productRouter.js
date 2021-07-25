const express = require('express');
const productController = require("../controllers/productController");
const router = express.Router();
var isAuth = require('../middleware/isAuth.js')

router.use(isAuth)
router.post("/product", productController.addProduct);
router.put("/product", productController.editProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:id", productController.getProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
