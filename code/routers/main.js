const express = require("express");
const router = express.Router();
const mainController = require("../Controllers/mainController");

router.get("/", mainController.index);
router.get("/productList/:nombre", mainController.featured);

module.exports = router;