const fs = require("file-system");
const path = require("path");

const createProductsController = {
    formulario: (req, res) =>{
        res.render("createProducts");
    },
    create: (req, res) => {
        console.log(req.body)
        let producto = JSON.parse (req.body);
        let consoles = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/consoles.json"), "utf-8"));
        consoles.push(producto);
        consoles = JSON.stringify(consoles)
        fs.writeFile(path.join(__dirname, "../data/consoles.json"), "utf-8");
        res.send(producto);
    }
};

module.exports = createProductsController;