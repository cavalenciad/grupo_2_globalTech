module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios";

    let cols = {
        idUsuarios:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },

        nombre:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        apellido:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        nombreUsuario:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        pais:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        imagen:{
            type: dataTypes.BLOB,
            allowNull: false
        },

        contrasena:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        terminosycondiciones:{
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