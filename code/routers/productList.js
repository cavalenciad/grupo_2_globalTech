const express = require('express');
const router = express.Router();
const productListController = require("../Controllers/productListController");

router.get("/", productListController.productList);
router.get("/productList/:nombre", productListController.consolesDescription);
router.get("/productList/:nombre", productListController.accesoriesDescription);
router.get("/productList/:nombre", productListController.smartPhonesDescription);
router.get("/productList/:nombre", productListController.laptopsGamersDescription);
router.get("/productList/:nombre", productListController.hardwareDescription);
router.get("/", productListController.productDetail);
router.get("/:nombre", productListController.detalleCrud);

module.exports = router;