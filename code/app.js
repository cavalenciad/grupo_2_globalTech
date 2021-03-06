const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override')

const rutaMain = require("./routers/main.js");
const rutaUser = require("./routers/user.js");
const rutaProducts = require("./routers/products.js");

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(methodOverride ("_method"));

app.use("/", rutaMain);
app.use("/", rutaUser);
app.use("/products", rutaProducts);

app.use(express.static("./public"));

app.listen(3050, () =>
   console.log("Servidor activo")
);   