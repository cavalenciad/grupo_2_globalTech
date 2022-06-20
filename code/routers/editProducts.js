const express = require('express');
const router = express.Router();
const editProductsController = require("../Controllers/editProductsController");


router.get("/", editProductsController.formulario);

module.exports = router;