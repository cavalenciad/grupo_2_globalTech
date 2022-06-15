const express = require("express");
const path = require("path");
const app = express();

const rutaMain = require("./routers/main.js");
const rutaRegister = require("./routers/register.js");
const rutaLogin = require("./routers/login.js");
const rutaProductCart = require("./routers/ProductCart.js");
const rutaProductDetail = require("./routers/productDetail.js");
const rutaProductList = require("./routers/productList.js");
const rutaFormularioProducto = require("./routers/formularioProductos.js");

app.set("view engine", "ejs");
app.set("views", "./views")

app.use("/", rutaMain);
app.use("/register", rutaRegister);
app.use("/login", rutaLogin);
app.use("/productCart", rutaProductCart);
app.use("/productDetail", rutaProductDetail);
app.use("/productList", rutaProductList);
app.use("/formularioProductos", rutaFormularioProducto);

/* ------------ PROXÍMO A ELIMINAR LUEGO DEL RUTEO ------------- */

/*--------*/
/*--- END POINT ---*/

/*app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"));
   });

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"));
   });

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
   });

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
   });*/
   
   
app.use(express.static("./public"));

app.listen(3050, () =>
   console.log("Servidor activo")
);   