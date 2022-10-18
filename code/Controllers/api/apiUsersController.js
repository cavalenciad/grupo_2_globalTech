const db = require("../../database/models");
const Op = db.Sequelize.Op;

const apiUsersController ={
    list: async (req,res) =>{
        
    try {
        const allUsers =  await db.usuarios.findAll();

        const totalUsers = allUsers.length;

        const userDetail = allUsers.map( users => {
            return {
                id: users.idusuarios,
                email: users.email,
                name: users.nombre,
                user: users.nombreusuario,
                imagen: users.imagen,
                detail: `http://globaltech-grupo2.herokuapp.com/apiUsers/${users.idusuarios}`
            }
        })

        if(allUsers) {
            res.status(200).json({
                'count': totalUsers,
                'data': userDetail,
                'status': 200,
                'endpoint': '/apiUsers'
            })
        }else{
            res.status(404).json({'msg': 'No hay datos para mostrar'});
        }
        }
        catch (error) {
            console.log(error);
            // res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            res.status(500).json({'msg': '500 - Ha ocurrido un error interno'});        
        }

    },

    detail: async (req,res) =>{
        
        try {
            const user = await db.usuarios
            .findByPk(req.params.id, {
                where: {
                    idusuarios: req.params.id
                }
            });

            if(user){
                res.status(200).json({
                    "id": user.idusuarios,
                    "email": user.email,
                    "name": user.nombre,
                    "lastName": user.apellido,
                    "user": user.nombreusuario,
                    "country": user.pais,
                    "image": user.imagen,
                    "url_image": `http://globaltech-grupo2.herokuapp.com/images/images_user/${user.imagen}`,
                    'endpoint': `/apiUsers/${user.idusuarios}`
                })
            }else{
                res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
            }
        }

        catch (error) {
            console.log(error);
            // res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            res.status(500).json({'msg': '500 - Ha ocurrido un error interno'});        
        }       

    },

    lastDetail: async (req,res) =>{
        
        try {
            const usuarios = await db.usuarios
            .findAll({
                include:{
                    all:true,
                    nested:true,                    
                }
            });

            let arrayId = usuarios.map(id => id.idusuarios)
            let lastId = (Math.max(...arrayId))

            let lastUserDetail;
            usuarios.forEach(user => {
                if(user.idusuarios === lastId) {
                    lastUserDetail = {
                        id: user.idusuarios,
                        name: user.nombre,
                        email: user.email,
                        name: user.nombre,
                        lastName: user.apellido,
                        user: user.nombreusuario,
                        country: user.pais,
                        image: user.imagen,
                        url_image: `http://globaltech-grupo2.herokuapp.com/images/images_user/${user.imagen}`,
                        detail: `http://globaltech-grupo2.herokuapp.com/apiUsers/${user.idusuarios}`
                    }
                }
                return lastUserDetail;
            })

            if(usuarios){
                res.status(200).json(lastUserDetail)
            }else{
                res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
            }
        }

        catch (error) {
            console.log(error);
            // res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            res.status(500).json({'msg': '500 - Ha ocurrido un error interno'});        
        }       

    },

}

module.exports = apiUsersController;