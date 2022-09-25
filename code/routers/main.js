const express = require("express");
const router = express.Router();
const mainController = require("../Controllers/mainController");

router.get("/", mainController.index);
router.get("/productList/:nombre", mainController.featured);
router.get("/about-us", mainController.about);
module.exports = router;