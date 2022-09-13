module.exports = (sequelize, dataTypes) => {

    let alias = "categorias";

    let cols = {
        idCategoria:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Categoria:{
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    let config = {
        tableName: "categoria",
        timestamps: false
    };

    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = function(models) {
        categoria.hasMany(models.productos, {
            as: "producto",
            foreignKey: "Categoria_idCategoria"
        })
    };

    

    return categoria;

}