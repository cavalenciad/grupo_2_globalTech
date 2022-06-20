const path = require('path');
const fs = require('fs');

const consoles = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/consoles.json"), "utf-8"));
const accesories = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/peripheralsAccesories.json"), "utf-8"));
const smartPhones = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/smartPhones.json"), "utf-8"));
const laptopsGamers = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/laptopsGamers.json"), "utf-8"));
const hardware = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/hardware.json"), "utf-8"));

const productListController ={
    productList: (req, res) => {
        res.render("productList", {consoles, accesories, smartPhones, laptopsGamers, hardware});
    },
    consolesDescription: (req, res) => {
        let consolesDescription = consoles.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            consolesDescription
        });
    },
    accesoriesDescription: (req, res) => {
        let accesoriesDescription = accesories.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            accesoriesDescription
    });
},
    smartPhonesDescription: (req, res) => {
        let smartPhonesDescription = smartPhones.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            smartPhonesDescription
        });
    },
    laptopsGamersDescription: (req, res) => {
        let laptopsGamersDescription = laptopsGamers.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            laptopsGamersDescription

});
    },
    hardwareDescription: (req, res) => {
        let hardwareDescription = hardware.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            hardwareDescription

        });
    },
    buscar: (req, res) => {
        let busqueda = req.query;
        res.send(busqueda);
    }
}
    
module.exports = productListController;