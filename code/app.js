const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override');
const session = require ('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cookies = require ('cookie-parser');
const PORT = process.env.PORT || 3050

const rutaMain = require("./routers/main.js");
const rutaUser = require("./routers/users.js");
const rutaProducts = require("./routers/products.js");

/* ----------Rutas Api ----------------------- */ 

const rutaApiProducts = require("./routers/api/apiProducts.js");

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(session({
   secret: 'GlobalTech Secret', 
   resave: false,
   saveUninitialized: false
}));

app.use(cookies());
app.use(methodOverride ("_method"));
app.use(userLoggedMiddleware);

app.use("/", rutaMain);
app.use("/", rutaUser);
app.use("/products", rutaProducts);
app.use("/", rutaApiProducts);


app.use(express.static("./public"));

app.listen(PORT, () =>
   console.log("Servidor activo en el puerto 3050")
);  