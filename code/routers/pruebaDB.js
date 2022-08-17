const express = require('express');
const router = express.Router();
const pruebaControllerDB = require("../Controllers/pruebaControllerDB");

router.get("/", pruebaControllerDB.list)

module.exports = router;