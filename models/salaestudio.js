'use strict';
const {
    DataTypes
} = require('sequelize');
module.exports = sequelize.define('SalaEstudio', {
    Sala_Codigo: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        notNull: true,
        unsigned: true
    },
    Nombre: {
        type: DataTypes.VARCHAR,
        notNull: true
    },
    Inventario: {
        type: DataTypes.JSON,
        notNull: true,
    },
    Num_Personas_Max: {
        type: DataTypes.INTEGER,
        notNull: true
    }
}, {
    tableName: 'Sala De Estudio',
    paranoid: true
});