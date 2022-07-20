const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController");


router.get("/user/login", userController.login);
router.get("/user/register", userController.register);

module.exports = router;