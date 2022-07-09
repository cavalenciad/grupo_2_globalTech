const express = require('express');
const router = express.Router();
const multer = require('multer');
const productsController = require("../Controllers/productsController");
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/imagenesPrueba'));
    },
    filename: (req, file, cb) => {
        const fileName = 'prueba-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});

const upload = multer({storage});

router.get("/", productsController.productList);
router.get("/productDetail:/nombre", productsController.featured);
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

router.post("/createProducts", upload.array('imagen', 4), productsController.create);

module.exports = router;