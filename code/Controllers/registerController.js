const path = require("path");


const registerController = {
    register: (req, res) => {
        res.render("register");
    },
};

module.exports = registerController;