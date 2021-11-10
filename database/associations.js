function createAssociation() {
    const {
        Material,
        Prestamos,
        Reserva,
        SalaEstudio,
        Usuarios
    } = sequelize.models
    /* Usuarios.hasMany(Prestamos, {
         foreignKey: 'Cod_Usuario',
         allowNull: false,
     });*/
    /* un prestamo pertenece a un Usuario  */
    Prestamos.belongsTo(Usuarios, {
        foreignKey: 'Cod_Usuario',
        allowNull: false,
        // primaryKey: true
    });
    Usuarios.hasMany(Prestamos, {
        foreignKey: 'Cod_Usuario',
        allowNull: false,
    })

    Prestamos.belongsTo(Material, {
        foreignKey: 'Cod_Material',
        allowNull: false,
    })
    Material.hasMany(Prestamos, {
        foreignKey: 'Cod_Material',
        allowNull: false,
    })

    // relaciones de prestamo a usuario
    Reserva.belongsTo(Usuarios, {
        foreignKey: 'Cod_Usuario',
        allowNull: false,
    })
    Usuarios.hasMany(Reserva, {
        foreignKey: 'Cod_Usuario',
        allowNull: false,
    })


    Reserva.belongsTo(SalaEstudio, {
        foreignKey: 'Cod_Sala',
        allowNull: false,
    })
    SalaEstudio.hasMany(Reserva, {
        foreignKey: 'Cod_Sala',
        allowNull: false,
        //primaryKey: true
    })
    /*                    */
}

module.exports = { createAssociation };