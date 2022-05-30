const express = require("express");
const path = require("path");

const app = express();

app.listen(3050, () =>
 console.log("Servidor activo")
);

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
   });

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"));
   });

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"));
   });

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
   });

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
   });   