const db = require("../database/models");
const path = require('path');
const fs = require('fs');
const { join } = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const userController = {

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

        db.usuarios.findOne({
            where: {email: req.body.email}
        })
        .then((resultado)=>{
            if(resultado){
                res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }else{
                db.usuarios.create({    
                    email: req.body.email,
                    nombre: req.body.name,
                    apellido: req.body.lastName,
                    nombreusuario: req.body.userName,
                    pais: req.body.country,
                    imagen: req.file.filename,
                    contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                    terminosycondiciones: 1
                })
                .then((user) => {
                    console.log(req.file);
                    res.redirect('/user/login');
                })                
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

        db.usuarios.findOne({
            where: { email: req.body.email }
        })
        .then((usuarioALoguearse) => {
            console.log(usuarioALoguearse);
            if(usuarioALoguearse){
                let isOkThePass = bcrypt.compareSync(req.body.contrasena, usuarioALoguearse.contrasena);
                if (isOkThePass) {
                    req.session.usuarioLogueado = usuarioALoguearse;
                    if(req.body.jRecuerdame){
                        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 3600});
                    }
                    res.redirect('/user/userProfile/' + usuarioALoguearse.idusuarios);
                }
                if (!usuarioALoguearse){
                    return res.render('login', {
                    errors: { contrasena: { 'msg': 'La contraseña no es correcta' }}})
                }
            }
        })                    
    },
    profile: (req, res) => {
        db.usuarios.findByPk(req.params.id)
        .then((usuarioEncontrado) => {
            res.render("userProfile", {
                usuario: usuarioEncontrado,
                user: req.session.usuarioLogueado
            });
        })        
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }

}


module.exports = userController;