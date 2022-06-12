const path = require("path");

const productCartController = {
    productCart: (req, res) =>{
        res.render("productCart");
    },
};

module.exports = productCartController;