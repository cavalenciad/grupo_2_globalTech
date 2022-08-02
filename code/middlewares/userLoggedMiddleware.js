function userLoggedMiddleware(req, res, next){
      res.locals.userLogged = false;

      if(req.session.usuarioLogueado) {
        res.locals.userLogged = true;

      }
    next();
    }


module.exports = userLoggedMiddleware;