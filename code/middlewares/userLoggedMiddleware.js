const path = require('path');
const fs = require('fs');
let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8"));

function userLoggedMiddleware(req, res, next){
      res.locals.userLogged = false;

      if(req.session.usuarioLogueado) {
        res.locals.userLogged = true;
        res.locals.userLogged = req.session.usuarioLogueado;
      }

      let emailInCookie = req.cookies.userEmail;
      let userFromCookie

      for(i = 0; i < users.length; i++){
        if(users[i].email === emailInCookie){
          req.session.userLogged = userFromCookie;
        }
      }

      if(userFromCookie){
        req.session.userLogged = userFromCookie;
      }

    next();
    }


module.exports = userLoggedMiddleware;