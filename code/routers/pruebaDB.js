const express = require('express');
const multer = require('multer');
const router = express.Router();
const pruebaControllerDB = require("../Controllers/pruebaControllerDB");

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

router.get("/productos", pruebaControllerDB.list)
router.get("/productos/detail/:id", pruebaControllerDB.detail);

router.get("/productos/createProductos", pruebaControllerDB.add);

router.get("/productos/detail/:id/editProducts", pruebaControllerDB.formularioEdit);

// Enrutado por POST

router.post("/productos/createProductos", upload.array('imagen', 4), pruebaControllerDB.create);

router.put("/productos/detail/:id/editProducts", upload.array('imagen', 4), pruebaControllerDB.edit);

router.delete("/productos/detail/:id/", pruebaControllerDB.destroy);



module.exports = router;