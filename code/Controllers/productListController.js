const path = require('path');


const productListController ={
    productList: (req, res) => {
        res.render("productList");
    },
};

module.exports = productListController;