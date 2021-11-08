'use strict';
const {
    DataTypes
} = require('sequelize');
module.exports = sequelize.define('SalaEstudio', {
    Codigo: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        notNull: true,
        unsigned: true
    },
    Nombre: {
        type: DataTypes.STRING,
        notNull: true
    },
    Inventario: {
        type: DataTypes.JSON,
        notNull: true,
    },
    Num_Personas_Max: {
        type: DataTypes.INTEGER,
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
    tableName: 'SalaEstudio',
    paranoid: true
});