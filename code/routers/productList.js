const express = require('express');
const router = express.Router();
const productListController = require("../Controllers/productListController");


router.get("/", productListController.productList);
router.get("/productList/:nombre", productListController.description);

module.exports = router;