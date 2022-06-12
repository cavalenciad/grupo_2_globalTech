const express = require('express');
const router = express.Router();
const registerController = require("../Controllers/registerController");


router.get("/", registerController.register);

module.exports = router;