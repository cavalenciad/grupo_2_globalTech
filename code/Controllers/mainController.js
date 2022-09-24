const path = require('path');
const fs = require('fs');
const featured = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/featured.json"), "utf-8"));

const mainController = {
    index: (req, res) =>{
        res.render("index", {featured});
    },
    featured: (req, res) =>{
        let featuredDescription = featured.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            featuredDescription
        });
    }
};
//probando conexion
module.exports = mainController;