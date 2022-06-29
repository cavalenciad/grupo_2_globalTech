const express = require('express');
const router = express.Router();
const createProductsController = require("../Controllers/createProductsController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, "images/Productos")
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage})


module.exports = router;