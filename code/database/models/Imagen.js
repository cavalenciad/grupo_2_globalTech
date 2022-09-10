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
            type: dataTypes.STRING,
            allowNull: false
        },

        Productos_idProductos:{
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

    };

    let config = {
        tableName: "imagen",
        timestamps: false
    };

    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function(models){
        Imagen.belongsTo(models.productos, {
            as: "producto",
            foreignKey: "Productos_idProductos"
        })        
    }
    return Imagen;
}