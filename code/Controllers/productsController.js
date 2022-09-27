const fs = require('fs');
const db = require("../database/models");
const Op = db.Sequelize.Op;

const productsController = {

    list: (req, res) => {
        db.productos.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        .then((producto) => {
            res.render("productsList", {producto})
        })
    },
    detail: (req, res) => {
        /* db.productos.findByPk(req.params.id)
            .then(producto =>{
                res.render("pruebaDetail", {producto:producto})
            }) */

        /* let requestProducto = db.productos.findByPk(req.params.id)
        let img = db.imagen.findAll({where: {
            Productos_idProductos: req.params.id,
            
        }})
        Promise.all([requestProducto, img])
            .then(function([producto, img]){
                res.render("pruebaDetail", {producto, img})
            }) */

        /* db.productos.findByPk(req.params.id, {
            include: [{association: "producto_imagen"}]
        })
        .then((producto) => {
            res.render("pruebaDetail", {producto});
        }) */


        db.productos.findByPk(req.params.id, {
            include: [{association: "imagen"}]
        })
        .then((producto) => {
            res.render("productDetail", {producto});                       
        })
    },
    productCart: (req, res) =>{
        res.render("productCart");
    },
    add: function (req, res) {
        /* let requestCategoria = db.categorias.findAll();
        let producto = db.productos.findAll()
        Promise.all([requestCategoria])
            .then(function([categoria]){
                res.render("createProducts", {producto, categoria})
            }) */
        
        db.categorias.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        .then((categoria) => {
            res.render("createProducts", {categoria})
        })

    },
    create: function (req,res) {
        db.productos.create({
            nombre: req.body.name,
            descripcion: req.body.description,
            precio: req.body.precio,
            Categoria_idCategoria: req.body.categoria,
            color1: req.body.color1,
            color2: req.body.color2
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
        .then(() => {
            res.redirect("/products")
        })
        
    },
    formularioEdit: (req, res) =>{
        let productoSelect = db.productos.findByPk(req.params.id);
        let requestCategoria = db.categorias.findAll();

        Promise.all([productoSelect, requestCategoria])
            .then(function([producto, categoria]) {
                res.render('editProducts', {producto, categoria});
            })  
    },
    edit: async(req, res) => {
        db.productos.update({
            nombre: req.body.name,
            descripcion: req.body.description,
            precio: req.body.precio,
            Categoria_idCategoria: req.body.categoria,
            color1: req.body.color1,
            color2: req.body.color2
        },
        {
            where: {
                idProductos: req.params.id
            }
        })
        .then( async (producto) => {
            let arrayImagen = [];
            if(req.files){
                const productImages = await db.imagen.findAll({limit: req.files.length, where: {Productos_idProductos : req.params.id}})
                for(let i=0; i<req.files.length; i++){
                    let imagen = req.files[i].filename;
                    arrayImagen.push({"idImagen": productImages[i].idImagen, "Imagen": imagen, "Productos_idProductos": req.params.id});
                }
                console.table(arrayImagen)
                db.imagen.bulkCreate(
                    arrayImagen,
                    {
                        updateOnDuplicate: ["Imagen"]
                    }
                )
            }            
        })

            /* let newImg = [];
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
                        imagen: oldImg.imagen.dataValues.Imagen
                }
            })
            }) */
        .then(() =>{
            res.redirect("/products/productDetail/" + req.params.id)
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
    destroy: (req, res) => {
        db.productos.destroy({
            where: {
                idProductos: req.params.id
            }
        })
        .then(() =>{
            res.redirect("/products")
        })
    }
}

module.exports = productsController;