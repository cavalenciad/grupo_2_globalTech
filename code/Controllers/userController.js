const path = require('path');


const userController ={
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
};

module.exports = userController;