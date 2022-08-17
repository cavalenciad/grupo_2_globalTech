module.exports = (sequelize, DataTypes) => {

    let alias = "productos";

    let cols = {
        idProductos:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        Nombre:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

        Descripcion:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },

        Precio:{
            type: DataTypes.FLOAT,
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

    const productos = sequelize.define(alias, cols, config);

    productos.associate = function(models) {
        productos.belongsTo(models.categoria, {
            as: "producto_categoria",
            foreignKey: "Categoria_idCategoria"
        })

        productos.hasMany(models.imagen, {
            as: "producto_imagen",
            foreignKey: "Productos_idProductos"
        })

        productos.belongsToMany(models.colores, {
            as: "producto_color",
            through: "productosycolores",
            foreignKey: "Productos_idProductos",
            otherKey: "Colores_idColores",
            timestamps: false
        })
    };

    return productos;

}