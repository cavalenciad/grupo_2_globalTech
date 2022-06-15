const path = require('path');
const fs = require('fs');
const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/consoles.json"), "utf-8"));

const productListController ={
    productList: (req, res) => {
        res.render("productList", {products});
    },
    description: (req, res) => {
        let productDescription = products.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            productDescription
        });
    },
};

module.exports = productListController;