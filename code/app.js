const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override')

const rutaMain = require("./routers/main.js");
const rutaRegister = require("./routers/register.js");
const rutaLogin = require("./routers/login.js");
const rutaProducts = require("./routers/products.js");
const rutaCreateProducts = require("./routers/createProducts.js");
const rutaEditProducts = require("./routers/editProducts.js");

app.set("view engine", "ejs");
app.set("views", "./views")

/* app.use(express.urlencoded({ extended: false}));
app.use(express.json()); */

app.use(methodOverride ("_method"));

app.use("/", rutaMain);
app.use("/register", rutaRegister);
app.use("/login", rutaLogin);
app.use("/products", rutaProducts);
app.use("/createProducts", rutaCreateProducts);
app.use("/editProducts", rutaEditProducts);

app.use(express.static("./public"));

app.listen(3050, () =>
   console.log("Servidor activo")
);   