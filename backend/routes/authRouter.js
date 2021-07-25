const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const categoryController = require("../controllers/categoryController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user", authController.getUser);
module.exports = router;
