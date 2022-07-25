const path = require('path');
const fs = require('fs');
const { join } = require('path');
const { validationResult } = require('express-validator');

let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8"));

const userController ={
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    createUser: (req, res) => {

        const resutlValidation = validationResult(req);

        if (resutlValidation.errors.length > 0) {
            res.render('register', {
                errors: resutlValidation.mapped(),
                oldData: req.body
            });
        }

        let createUser = {
            email: req.body.email,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nombreUser: req.body.nombreUser,
            pais: req.body.pais,
            imagen: req.file.filename,
            contrasena: req.body.contrasena,
            termCond: 'Si',
        };

        users.push(createUser);

        let usersJSON = JSON.stringify(users, null, ' ');

        fs.writeFileSync('./data/users.json', usersJSON,);

        console.log(req.files);

        res.send('Archivo subido correctamente');
    }
};

module.exports = userController;