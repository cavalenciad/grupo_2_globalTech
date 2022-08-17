module.exports = (sequelize, dataTypes) => {

    let alias = "imagen";

    let cols = {
        idImagen:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Imagen:{
            type: dataTypes.LONGBLOG,
            allowNull: false
        },

        Productos_idProductos:{
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        Colores_idColores:{
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

    };

    let config = {
        tableName: "imagen",
        timestamps: false
    };

    const imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function(models){
        Imagen.belongsTo(models.productos, {
            as: "imagen_producto",
            foreignKey: "Productos_idProductos"
        })
        
    }

    return imagen;

}