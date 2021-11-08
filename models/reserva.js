'use strict';
const {
    DataTypes
} = require('sequelize');
module.exports = sequelize.define('Reserva', {
    /*Cod_Usuario: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        notNull: true,
        unsigned: true
    },
    Cod_Sala: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        notNull: true,
        unsigned: true
    },*/
    Horario_Inicio: {
        type: DataTypes.DATE,
        notNull: true
    },
    Horario_Final: {
        type: DataTypes.DATE,
        notNull: true,
    },
    Disponibilidad: {
        type: DataTypes.ENUM("Disponible", "Ocupado"),
        notNull: true
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
    }
}, {
    tableName: 'Reserva',
    paranoid: true
});