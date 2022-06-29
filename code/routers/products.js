const express = require('express');
const router = express.Router();
const productsController = require("../Controllers/productsController");

router.get("/", productsController.productList);
router.get("/product/:nombre", productsController.consolesDescription);
router.get("/products/:nombre", productsController.accesoriesDescription);
router.get("/products/:nombre", productsController.smartPhonesDescription);
router.get("/products/:nombre", productsController.laptopsGamersDescription);
router.get("/products/:nombre", productsController.hardwareDescription);
router.get("/productDetail", productsController.productDetail); 
router.get("/productDetail/:nombre", productsController.detalleCrud);
router.get("/cart", productsController.productCart);

/* -------- CARGA Y EDICIÓN DE PRODUCTOS  --------- */
router.get("/:id/editProducts", productsController.edit)


module.exports = router;