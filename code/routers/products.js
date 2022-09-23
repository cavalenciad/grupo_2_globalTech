const express = require('express');
const multer = require('multer');
const router = express.Router();
const productsController = require("../Controllers/productsController");
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/Productos'));
    },
    filename: (req, file, cb) => {
        //const fileName = 'prueba-' + Date.now() + path.extname(file.originalname);
        cb(null, file.originalname);
    }
});

const upload = multer({storage});

router.get("/", productsController.list)
router.get("/productDetail/:id", productsController.detail);

router.get("/productDetail/:id/createProducts", productsController.add);

router.get("/productDetail/:id/editProducts", productsController.formularioEdit);

router.get("/cart", productsController.productCart);

// Enrutado por POST

router.post("/productDetail/createProducts", upload.array('imagen', 4), productsController.create);

router.put("/productDetail/:id/editProducts", upload.array('imagen', 4), productsController.edit);

router.delete("/productDetail/:id", productsController.destroy);



module.exports = router;