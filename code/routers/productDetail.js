const express = require('express');
const router = express.Router();
const productDetailController = require("../Controllers/productDetailController");


router.get("/", productDetailController.productDetail);
router.get("/:nombre", productDetailController.detalleCrud);

module.exports = router;