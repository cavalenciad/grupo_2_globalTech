module.exports = (sequelize, DataTypes) => {

    let alias = "productos";

    let cols = {
        idProductos:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

        descripcion:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },

        precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        },

        color1:{
            type: DataTypes.STRING(45),
            allowNull: false
        },

        color2:{
            type: DataTypes.STRING(45),
            allowNull: false
        },

        Categoria_idCategoria:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }

    };

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models) {
        Productos.belongsTo(models.categorias, {
            as: "categorias",
            foreignKey: "Categoria_idCategoria"
        })

        Productos.hasMany(models.imagen, {
            as: "imagen",
            foreignKey: "Productos_idProductos"
        })

    };

    return Productos;

}