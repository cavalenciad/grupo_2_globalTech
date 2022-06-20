const path = require("path");

const createProductsController = {
    formulario: (req, res) =>{
        res.render("createProducts");
    },
};

module.exports = createProductsController;