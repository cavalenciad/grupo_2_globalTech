const express = require('express');
const router = express.Router();
const createProductsController = require("../Controllers/createProductsController");


router.get("/", createProductsController.formulario);
router.post("/", createProductsController.create);

module.exports = router;