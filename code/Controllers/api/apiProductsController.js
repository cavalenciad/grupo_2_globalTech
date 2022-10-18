const db = require("../../database/models");
const Op = db.Sequelize.Op;

const apiProductsController ={
    list: async (req,res) =>{
        
    try {
        const allProducts =  await db.productos.findAll({
                include:{
                    all:true,
                    nested:true
                }});

        const totalProducts = allProducts.length;

        //Constante con el detalle de producto

        const productDetail = allProducts.map(product => {
            return {
                id: product.idProductos,
                name: product.nombre,
                description: product.descripcion,
                image: product.imagen[0].Imagen,
                category: product.categorias.Categoria,
                detail: `http://globaltech-grupo2.herokuapp.com/apiProducts/${product.idProductos}`
            }
        })

        let countCategory = function(category) {
            let counter = 0;

            allProducts.forEach(product => {
                if(product.categorias.Categoria === category){
                    counter++;
                }
            })
            
            return counter;
        }

        if(allProducts) {
            res.status(200).json({
                'count': totalProducts,
                'countByCategory': {
                    'consolas': countCategory("Consolas"),
                    'portátiles': countCategory("Portatiles"),
                    'hardware': countCategory("Hardware"),
                    'celulares': countCategory("Celulares"),
                    'periféricos': countCategory("Perifericos")
                },
                'data': productDetail,
                'status': 200,
                'endpoint': '/apiProducts'
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
            const producto = await db.productos
            .findByPk(req.params.id, {
                include:{
                    all:true,
                    nested:true
                },
                where: {
                    idProductos: req.params.id
                }
            });

            if(producto){
                res.status(200).json({
                    "id": producto.idProductos,
                    "name": producto.nombre,
                    "description": producto.descripcion,
                    "images": {
                        "image1": producto.imagen[0].Imagen,
                        "image2": producto.imagen[1].Imagen,
                        "image3": producto.imagen[2].Imagen,
                        "image4": producto.imagen[3].Imagen
                    },
                    "category": producto.categorias.Categoria,
                    "price": producto.precio,
                    "color1": producto.color1,
                    "color2": producto.color2,
                    "url_image": `http://globaltech-grupo2.herokuapp.com/images/Productos/${producto.imagen[0].Imagen}`,
                    'endpoint': `/apiProducts/${producto.idProductos}`
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
            const productos = await db.productos
            .findAll({
                include:{
                    all:true,
                    nested:true,                    
                }
            });

            let arrayId = productos.map(id => id.idProductos)
            let lastId = (Math.max(...arrayId))

            let lastProductDetail;
            productos.forEach(product => {
                if(product.idProductos === lastId) {
                    lastProductDetail = {
                        id: product.idProductos,
                        name: product.nombre,
                        description: product.descripcion,
                        image: product.imagen[0].Imagen,
                        category: product.categorias.Categoria,
                        price: product.precio,
                        color1: product.color1,
                        color2: product.color2,
                        detail: `http://globaltech-grupo2.herokuapp.com/apiProducts/${product.idProductos}`
                    }
                }
                return lastProductDetail;
            })

            if(productos){
                res.status(200).json(lastProductDetail)
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

    category: async (req,res) =>{
        
        try {
            const allCategories =  await db.categorias.findAll({
                    include:{
                        all:true,
                        nested:true
                    }});

            const totalCategories = allCategories.length;
    
            let countAll = function(id) {
                let counter = 0;
    
                allCategories.forEach(category => {
                    category.producto.forEach(product => {
                        if(id === product.Categoria_idCategoria){
                        counter++;
                        }
                    })                    
                })
                
                return counter
            }

            const categoryDetail = allCategories.map(categoria => {
                return {
                    id: categoria.idCategoria,
                    category: categoria.Categoria,
                    totalProducts: countAll(categoria.idCategoria)
                }
            });
    
            if(allCategories) {
                res.status(200).json({
                    'status': 200,
                    'endpoint': '/apiCategory',
                    'countCategories': totalCategories,
                    'data': categoryDetail,
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
    
    }

}

module.exports = apiProductsController;