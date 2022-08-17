const db = require("../database/models");

const pruebaControllerDB = {

    list: (req, res) => {
        db.productos.findAll()
            .then(producto =>{
                res.render("pruebaDB", {producto})
        })
    }
}

module.exports = pruebaControllerDB;