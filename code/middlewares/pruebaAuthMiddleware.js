function authMiddleware(req, res, next){
    if (!req.session.usuarioLogueado){
        return res.redirect('/user/iniciarSesion');
    } 
    next();
}
module.exports = authMiddleware;