const db = require("../../database/models");
const Op = db.Sequelize.Op;


const apiProductsController ={
    list: (req,res) =>{
        db.productos
            .findAll({
                include:{
                    all:true,
                    nested:true
                }
            })
            .then(productos =>{
                return res.status(200).json({
                    total: productos.length,
                    status: 200,
                    data: productos
                })
                    
            })

    },


    detail: (req,res) =>{
        db.productos
            .findByPk(req.params.id, {
                include:[{
                    association: "imagen"
                }]
            })
            .then(productos =>{
                return res.status(200).json({
                    status: 200,
                    data: productos
                })
                    
            })

    },

}

module.exports = apiProductsController;