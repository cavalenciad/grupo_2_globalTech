const express = require('express');
const multer = require('multer');
const router = express.Router();
const productsController = require("../Controllers/productsController");
const path = require('path');
const { body } = require('express-validator');

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

const validationCreate = [
    body ('name').notEmpty().withMessage('Debes agregar el nombre del producto'),
    body ('description').notEmpty().withMessage('Debes agregar la descripción del producto'),
    body('imagen').custom((value, {req}) => {
        let file = req.files;

        if (file && file.length < 4) {
            throw new Error('Tienes que subir una imagen');
        }else if(!file){
            throw new Error('Tienes que subir una imagen');
        }
        return true;
    }),
    body ('categoria').notEmpty().withMessage('Debes seleccionar la categoría correcta del producto'),
    body ('color1').notEmpty().withMessage('Debes seleccionar el primer color'),
    body ('color2').notEmpty().withMessage('Debes seleccionar el segundo color'),
    body ('precio').notEmpty().withMessage('Debes agregar el valor del producto'),
]

const validationEdit = [
    body ('name').notEmpty().withMessage('Recuerda no dejar este campo vacío'),
    body ('description').notEmpty().withMessage('Recuerda no dejar este campo vacío'),
    body ('categoria').notEmpty().withMessage('Recuerda no dejar este campo vacío'),
    body ('color1').notEmpty().withMessage('Recuerda no dejar este campo vacío'),
    body ('color2').notEmpty().withMessage('Recuerda no dejar este campo vacío'),
    body ('precio').notEmpty().withMessage('Recuerda no dejar este campo vacío'),
]

router.get("/", productsController.list)
router.get("/productDetail/:id", productsController.detail);

router.get("/productDetail/:id/createProducts", productsController.add);

router.get("/productDetail/:id/editProducts", productsController.formularioEdit);

router.get("/cart", productsController.productCart);

// Enrutado por POST

router.post("/productDetail/createProducts", upload.array('imagen', 4), validationCreate, productsController.create);

router.put("/productDetail/:id/editProducts", upload.array('imagen', 4), validationEdit, productsController.edit);

router.delete("/productDetail/:id", productsController.destroy);

router.delete("/productCart/:id", productsController.destroy)




module.exports = router;