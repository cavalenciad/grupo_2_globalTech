const db = require("../database/models");
const path = require('path');
const fs = require('fs');
const { join } = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const pruebaUserController = {

    register: (req, res) => {
        res.render("pruebaRegister");
    },

    createUser: (req, res) => {
       
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            res.render('pruebaRegister', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        console.log(db.usuarios)

        db.usuarios.findOne({
            where: {Email: req.body.email}
        })
        .then((resultado)=>{

            if(resultado){
                res.render('pruebaRegister', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }else{
                db.usuarios.create({
    
                    Email: req.body.email,
                    Nombre: req.body.nombre,
                    Apellido: req.body.apellido,
                    NombreUsuario: req.body.nombreUser,
                    Pais: req.body.pais,
                    Imagen: req.file.filename,
                    Contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                    TerminosYcondiciones: 1
                })

                res.redirect('/user/iniciarSesion');
            }

        })

            


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

        findByField = function(field, text) {
            let userFound = users.find(oneUser => oneUser[field] === text);
            return userFound;
        }

        let usuarioALoguearse = findByField('email', req.body.email);
        console.log(usuarioALoguearse);

        if(usuarioALoguearse){
            let isOkThePass = bcrypt.compareSync(req.body.contrasena, usuarioALoguearse.contrasena);
            if (isOkThePass) {
                //delete usuarioALoguearse.contrasena;
                req.session.usuarioLogueado = usuarioALoguearse;
                if(req.body.jRecuerdame){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60});
                }
                res.redirect('/user/userProfile');
            }
            if (!usuarioALoguearse){
                return res.render('login', {
                errors: {contrasena: {msg: 'La contraseña no es correcta'}}})
            }
        }
        
            
    },
    profile: (req, res) => {
        console.log(req.cookies.userEmail);
        res.render("userProfile", {
            user: req.session.usuarioLogueado
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }

}


module.exports = pruebaUserController;