const express = require('express');
const router = express.Router();
const formularioProductosController = require("../Controllers/formularioProductosController");


router.get("/", formularioProductosController.formulario);

module.exports = router;