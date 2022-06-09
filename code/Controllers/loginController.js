const path = require('path');


const loginController ={
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"));
},
};

module.exports = registerController;