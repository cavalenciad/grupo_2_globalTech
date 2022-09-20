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

router.get("/productos", productsController.list)
router.get("/productos/detail/:id", productsController.detail);

router.get("/productos/createProductos", productsController.add);

router.get("/productos/detail/:id/editProducts", productsController.formularioEdit);

// Enrutado por POST

router.post("/productos/createProductos", upload.array('imagen', 4), productsController.create);

router.put("/productos/detail/:id/editProducts", upload.array('imagen', 4), productsController.edit);

router.delete("/productos/detail/:id", productsController.destroy);



module.exports = router;