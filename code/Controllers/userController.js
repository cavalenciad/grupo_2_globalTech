const path = require('path');
const fs = require('fs');
const { join } = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8"));

const userController ={
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

        function generateID(){
            let lastUser = users.pop();
            if (lastUser) {
                users.push(lastUser);
                return lastUser.id + 1;
            }
            return 1;
        }

        let createUser = {
            id: generateID(),
            email: req.body.email,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nombreUser: req.body.nombreUser,
            pais: req.body.pais,
            imagen: req.file.filename,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            termCond: 'Si',
        };

        console.log(createUser);

        for (i = 0; i < users.length; i++){
            if (users[i].email == req.body.email){
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }
        }

        users.push(createUser);
        let usersJSON = JSON.stringify(users, null, ' ');
        fs.writeFileSync('./data/users.json', usersJSON,);
        
        res.redirect('/user/login');
    },
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

        let usuarioALoguearse;

        for(i = 0; i < users.length; i++) {            
            if (users[i].email == req.body.email && bcrypt.compareSync(req.body.contrasena, users[i].contrasena)) {
                usuarioALoguearse = users[i];
                req.session.usuarioLogueado = usuarioALoguearse;
                res.redirect('/');
                break;
            } 
        }
        if (!usuarioALoguearse){
            return res.render('login', {
            errors: {contrasena: {msg: 'La contraseña no es correcta'}}})
        }
    }
};

module.exports = userController;