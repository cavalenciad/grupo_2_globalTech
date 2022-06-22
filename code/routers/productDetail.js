const express = require('express');
const router = express.Router();
const productDetailController = require("../Controllers/productDetailController");


router.get("/", productDetailController.productDetail);
router.get("/:id?", productDetailController.detalleCrud);

module.exports = router;