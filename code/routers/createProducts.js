const express = require('express');
const router = express.Router();
const createProductsController = require("../Controllers/createProductsController");


router.get("/", createProductsController.formulario);

module.exports = router;