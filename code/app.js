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