const path = require('path');
const fs = require('fs');
const { join } = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8"));

const userController ={
    login: (req, res) => {
        res.render("login");
    },
    processLogin: (req, res) => {
        const resultValidationLog = validationResult(req);

        if (resultValidationLog.errors.length > 0) {
            res.render('login', {
                errors: resultValidationLog.mapped(),
            });
        }

        for(i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email && bcrypt.compareSync(req.body.contrasena, users[i].contrasena)) {
                res.send('Bienvenido a GlobalTech');
            } else if (resultValidationLog.errors.length > 0) {
                res.render('login', {errors: resultValidationLog.mapped()});
            }
        }

        
    },
    register: (req, res) => {
        res.render("register");
    },
    createUser: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            res.render('register', {
                errors: resultValidation.mapped(),
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
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
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