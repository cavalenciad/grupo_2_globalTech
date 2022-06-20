const path = require("path");

const editProductsController = {
    formulario: (req, res) =>{
        res.render("editProducts");
    },
};

module.exports = editProductsController;