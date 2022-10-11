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
                detail: `http://localhost:3050/apiUsers/${users.idusuarios}`
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
                    "url_image": `http://localhost:3050/images/images_user/${user.imagen}`,
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

}

module.exports = apiUsersController;