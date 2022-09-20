const express = require('express');
const router = express.Router();
const multer = require('multer');
const usersController = require("../Controllers/usersController");
const path = require('path');
const { body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/images_user'));
    },
    filename: (req, file, cb) => {
        const fileName = 'avatar-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});

const uploadAvatar = multer({storage});

const validationsReg = [
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('nombre').notEmpty().withMessage('Debes ingresar un nombre'),
    body('apellido').notEmpty().withMessage('Debes ingresar un apellido'),
    body('nombreUser').notEmpty().withMessage('Debes ingresar un nombre de usuario'),
    body('pais').notEmpty().withMessage('Debes seleccionar un país'),
    body('imagen').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    }),
    body('contrasena').notEmpty().withMessage('Debes ingresar una contraseña'),
]

const validationsLog = [
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('contrasena').notEmpty().withMessage('Debes ingresar una contraseña')
]

router.get("/user/login", guestMiddleware, usersController.login);
router.get("/user/logout",  usersController.logout);
router.get("/user/userProfile/:id", authMiddleware, usersController.profile);
router.get("/user/register", guestMiddleware, usersController.register);

// Enrutado por POST

router.post('/user/register', uploadAvatar.single('imagen'), validationsReg, usersController.createUser);
router.post('/user/login', validationsLog, usersController.processLogin);

module.exports = router;