const path = require("path");

const productCartController = {
    productCart: (req, res) =>{
        res.sendFile(path.join(__dirname, "../views/productCart.html"));
    },
};

module.exports = productCartController;