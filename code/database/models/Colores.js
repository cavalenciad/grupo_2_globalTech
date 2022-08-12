module.exports = (sequelize, dataTypes) => {

    let alias = "colores";

    let cols = {
        idColores:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        Color:{
            type: dataTypes.STRING(45),
            allowNull: false
        }

    };

    let config = {
        tableName: "colores",
        timestamps: false
    };

    const colores = sequelize.define(alias, cols, config);

    colores.associate = function(models) {

        colores.belongsToMany(models.productos, {
            as: "color_producto",
            through: "productosycolores",
            foreignKey: "Colores_idColores",
            otherKey: "Productos_idProductos",
            timestamps: false
        })
    };

    return colores;

}