const db = require("../database/models");

const pruebaControllerDB = {

    list: (req, res) => {
        db.productos.findAll()
            .then(producto =>{
                res.render("pruebaDB", {producto})
        })
    },

    detail: (req, res) => {
        db.productos.findByPk(req.params.id)
            .then(producto =>{
                res.render("pruebaDetail", {producto:producto})
            })
    },

    add: function (req, res) {
        let requestCategoria = db.categorias.findAll();
        let producto = db.productos.findAll()
        Promise.all([requestCategoria])
            .then(function([categoria]){
                res.render("pruebaCreateProducts", {producto, categoria})
            })
    },

    create: function (req,res) {
        console.log({
            Nombre: req.body.name,
            Descripcion: req.body.description,
            Precio: req.body.precio,
            Categoria_idCateogoria: parseInt(req.body.categoria)

        });
        db.productos.create({
            Nombre: req.body.name,
            Descripcion: req.body.description,
            Precio: req.body.precio,
            Categoria_idCateogoria: parseInt(req.body.categoria)

        });

        res.redirect("/productos/createProductos")

    },

    formularioEdit: (req, res) =>{
        let productoSelect = db.productos.findByPk(req.params.id);
        let requestCategoria = db.categorias.findAll();
        let requestColor = db.colores.findAll();

        Promise.all([productoSelect, requestCategoria, requestColor])
            .then(function([producto, categoria, colores]) {
                res.render('pruebaEditProducts', {producto, categoria, colores});
            })  
    },
}

module.exports = pruebaControllerDB;