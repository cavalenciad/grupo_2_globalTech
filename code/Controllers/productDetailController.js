const path = require('path');


const productDetailController ={
    productDetail: (req, res) => {
        res.render("productDetail");
    },
};

module.exports = productDetailController;