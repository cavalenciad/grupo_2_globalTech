module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios";

    let cols = {
        idUsuarios:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        Email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },

        Nombre:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        Apellido:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        NombreUsuario:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        Pais:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        Imagen:{
            type: dataTypes.BLOB,
            allowNull: false
        },

        Contrasena:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        TerminosYcondiciones:{
            type: dataTypes.TINYINT,
            allowNull: false
        }


    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;

}