const express = require('express');
const router = express.Router();
const productDetailController = require("../Controllers/productDetailController");


router.get("/productDetail", productDetailController.productDetail);

module.exports = router;