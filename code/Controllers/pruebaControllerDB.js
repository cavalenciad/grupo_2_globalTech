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
        db.productos.create({
            Nombre: req.body.name,
            Descripcion: req.body.description,
            Precio: req.body.precio,
            Categoria_idCategoria: req.body.categoria,
            Color1: req.body.color1,
            Color2: req.body.color2

        })

        .then(() =>{
            res.redirect("/productos")
        })

    },

    formularioEdit: (req, res) =>{
        let productoSelect = db.productos.findByPk(req.params.id);
        let requestCategoria = db.categorias.findAll();

        Promise.all([productoSelect, requestCategoria])
            .then(function([producto, categoria]) {
                res.render('pruebaEditProducts', {producto, categoria});
            })  
    },

    edit: (req, res) => {

        console.log(req.body);
        db.productos.update({
            Nombre: req.body.name,
            Descripcion: req.body.description,
            Precio: req.body.precio,
            Categoria_idCategoria: req.body.categoria,
            Color1: req.body.color1,
            Color2: req.body.color2
        },
        {
            where: {
                idProductos: req.params.id
            }
        })

        .then(() =>{
            res.redirect("/productos/detail/" + req.params.id)
        })
    },

    destroy: (req, res) =>{
        db.productos.destroy({
            where: {
                idProductos: req.params.id
            }
        })

        .then(() =>{
            res.redirect("/productos")
        })

    }
}

module.exports = pruebaControllerDB;