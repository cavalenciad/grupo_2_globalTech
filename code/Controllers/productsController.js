const path = require('path');
const fs = require('fs');
const { join } = require('path');

let consoles = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/consoles.json"), "utf-8"));
let accesories = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/peripheralsAccesories.json"), "utf-8"));
let smartPhones = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/smartPhones.json"), "utf-8"));
let laptopsGamers = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/laptopsGamers.json"), "utf-8"));
let hardware = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/hardware.json"), "utf-8"));
let featured = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/featured.json"), "utf-8"));
let products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8"));

const productsController ={
    productList: (req, res) => {
        res.render("productList", {consoles, accesories, smartPhones, laptopsGamers, hardware});
    },
    consolesDescription: (req, res) => {
        let consolesDescription = consoles.find(item => item.nombre === req.params.nombre);
        return res.render("productList", {
            consolesDescription
        });
    },
    accesoriesDescription: (req, res) => {
        let accesoriesDescription = accesories.find(item => item.nombre === req.params.nombre);
        return res.render("productList", {
            accesoriesDescription
        });
    },
    smartPhonesDescription: (req, res) => {
        let smartPhonesDescription = smartPhones.find(item => item.nombre === req.params.nombre);
        return res.render("productList", {
            smartPhonesDescription
        });
    },
    laptopsGamersDescription: (req, res) => {
        let laptopsGamersDescription = laptopsGamers.find(item => item.nombre === req.params.nombre);
        return res.render("productList", {
            laptopsGamersDescription
        });
    },
    hardwareDescription: (req, res) => {
        let hardwareDescription = hardware.find(item => item.nombre === req.params.nombre);
        return res.render("productList", {
            hardwareDescription
        });
    },
    featured: (req, res) => {
        let featuredDescription = featured.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", featuredDescription);
    },
    detalleCrud: (req, res) => {
        let product = products.find(products => products.nombre === req.params.nombre);
        res.render('productDetail', product);
    },
    productCart: (req, res) =>{
        res.render("productCart");
    },
    formularioEdit: (req, res) =>{
        let editingProducts = products.find(products => products.nombre === req.params.nombre);
        res.render("editProducts", editingProducts);
    },
    edit: (req, res) =>{
        let newValues = {
            id: req.body.id,
            nombre: req.body.name,
            descripcion: req.body.description,
            categoria: req.body.categoria,
            color1: req.body.color1,
            color2: req.body.color2,
            precio: req.body.precio,
        };

        console.log(newValues);

        let oldValues = products.find(products => products.nombre === req.params.nombre);

        products.splice(products.indexOf(oldValues), 1, newValues);

        let productsJSON = JSON.stringify(products, null, ' ');

        fs.writeFileSync('./data/products.json', productsJSON,);

        res.send('Viajó por put');
    },

    formularioCreate: (req, res) =>{
        res.render("createProducts");
    },
    create: (req, res) => {
        let createProduct = {
            id: req.body.id,
            nombre: req.body.name,
            descripcion: req.body.description,
            categoria: req.body.categoria,
            color1: req.body.color1,
            color2: req.body.color2,
            precio: req.body.precio,
            imagen1: req.files[0].originalname,
            imagen2: req.files[1].originalname,
            imagen3: req.files[2].originalname,
            imagen4: req.files[3].originalname,
        };

        products.push(createProduct);

        let productsJSON = JSON.stringify(products, null, ' ');

        fs.writeFileSync('./data/products.json', productsJSON,);

        console.log(req.files);
        res.send('Archivo subido correctamente');
    }
}
    
module.exports = productsController;