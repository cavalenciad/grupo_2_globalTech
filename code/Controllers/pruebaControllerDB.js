const fs = require('fs');
const db = require("../database/models");
const Op = db.Sequelize.Op;

const pruebaControllerDB = {

    list: (req, res) => {
        db.productos.findAll()
            .then(producto =>{
                res.render("pruebaDB", {producto})
        })
    },
    detail: (req, res) => {
        /* db.productos.findByPk(req.params.id)
            .then(producto =>{
                res.render("pruebaDetail", {producto:producto})
            }) */
        let requestProducto = db.productos.findByPk(req.params.id)
        let img = db.imagen.findAll({where: {
            Productos_idProductos: req.params.id,
            attributes: [[sequelize.fn('min', sequelize.col('idImagen')), 'minId']]
        }})
        Promise.all([requestProducto, img])
            .then(function([producto, img]){
                res.render("pruebaDetail", {producto, img})
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
        .then((producto) => {
            let arrayImagen = [];
            for(let i=0; i<req.files.length; i++){
                let imagen = req.files[i].filename;
                arrayImagen.push({Imagen: imagen, Productos_idProductos: producto.idProductos});
            }
            db.imagen.bulkCreate(
                arrayImagen
            )
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
        .then((producto) => {

            let newImg = [];
            for(let i=0; i<req.files.length; i++){
                let imagen = fs.readFileSync(req.files[i].path);
                newImg.push({Imagen: imagen, Productos_idProductos: producto.idProductos});
            }

            db.imagen.findAll(producto.idProductos)
            .then((oldImg) => {
                console.log(newImg)
                console.log('hola')
                console.log(oldImg)
                db.imagen.update({
                Imagen: newImg
                }, 
                {
                    where:{
                        magen: oldImg.imagen.dataValues.Imagen
                }
            })
            })
        })
        .then(() =>{
            res.redirect("/productos/detail/" + req.params.id)
        })
    },
    /* edit: (req, res) => {

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
        .then(() => {
            let newImg = [];
            for(let i=0; i<req.files.length; i++){
                let imagen = fs.readFileSync(req.files[i].path);
                newImg.push({Imagen: imagen});
            }
            console.log(newImg)
            console.log("Hola")
            db.imagen.update({
                newImg
            }, 
            {
                where:{
                    Productos_idProductos: req.params.id
                },
                attributes: ['Imagen']
            })                
        }) */
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