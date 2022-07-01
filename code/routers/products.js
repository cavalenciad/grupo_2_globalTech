const express = require('express');
const router = express.Router();
const productsController = require("../Controllers/productsController");
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

router.get("/", productsController.productList);
router.get("/product/:nombre", productsController.consolesDescription);
router.get("/products/:nombre", productsController.accesoriesDescription);
router.get("/products/:nombre", productsController.smartPhonesDescription);
router.get("/products/:nombre", productsController.laptopsGamersDescription);
router.get("/products/:nombre", productsController.hardwareDescription);
router.get("/productDetail", productsController.productDetail); 
router.get("/:nombre/editProducts", productsController.formularioEdit);
router.get("/productDetail/:nombre", productsController.detalleCrud);
router.get("/cart", productsController.productCart);
router.get("/createProducts", productsController.formularioCreate);

// Enrutado por POST

router.post("/createProducts", upload.single("imagen"), productsController.create)

module.exports = router;