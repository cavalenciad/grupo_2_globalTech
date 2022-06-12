const express = require("express");
const path = require("path");
const app = express();

const rutaMain = require("./routers/main.js");
const rutaRegister = require("./routers/register.js");
const rutaLogin = require("./routers/login.js");
const rutaProductCart = require("./routers/ProductCart.js");
const rutaProductDetail = require("./routers/productDetail.js");

app.set("view engine", "ejs");
app.set("views", "./views")

app.use("/", rutaMain);
app.use("/register", rutaRegister);
app.use("/login", rutaLogin);
app.use("/productCart", rutaProductCart);
app.use("/productDetail", rutaProductDetail);

/* ------------ PROXÍMO A ELIMINAR LUEGO DEL RUTEO ------------- */


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
   
   
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3050, () =>
   console.log("Servidor activo")
);   