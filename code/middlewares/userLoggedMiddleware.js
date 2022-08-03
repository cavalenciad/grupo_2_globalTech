function userLoggedMiddleware(req, res, next){
      res.locals.userLogged = false;

      let emailInCookie = req.cookies.userEmail;
      /*let userFromCookie = User.findByField('email', emailInCookie);

      if(userFromCookie){
        req.session.userLogged = userFromCookie;
      }*/

      if(req.session.usuarioLogueado) {
        res.locals.userLogged = true;
        res.locals.userlogged = req.session.userLogged;
      }

    next();
    }


module.exports = userLoggedMiddleware;