const express =require("express");
const router =express.Router();
const productCartController = require("../Controllers/productCartController")

router.get("/", productCartController.productCart);

module.exports = router;