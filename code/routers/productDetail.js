const express = require('express');
const router = express.Router();
const productDetailController = require("../Controllers/productDetailController");


router.get("/", productDetailController.productDetail);
router.get("/productDetail/:nombre", productDetailController.productId);

module.exports = router;