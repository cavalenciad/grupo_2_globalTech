const express = require('express');
const router = express.Router();
const productDetailController = require("../Controllers/productDetailController");


router.get("/", productDetailController.productDetail);

module.exports = router;