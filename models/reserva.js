'use strict';
const {
    DataTypes
} = require('sequelize');
module.exports = sequelize.define('Reserva', {
    Cod_Usuario: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        notNull: true,
        unsigned: true
    },
    Sala_Codigo: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        notNull: true,
        unsigned: true
    },
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
    }
}, {
    tableName: 'Reserva',
    paranoid: true
});