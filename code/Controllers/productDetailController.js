const path = require('path');


const productDetailController ={
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"));
    },
};

module.exports = productDetailController;