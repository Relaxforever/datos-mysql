'use strict';
const {
    DataTypes
} = require('sequelize');
module.exports = sequelize.define('Material', {
    Codigo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        notNull: true,
        unsigned: true,
    },
    F_Publicacion: {
        type: DataTypes.DATE,
        notNull: true,
    },
    Categoria: {
        type: DataTypes.STRING,
        notNull: true,
    },
    Autores: {
        type: DataTypes.JSON,
    },
    Disponibilidad: {
        type: DataTypes.ENUM("Disponible", "Agotado"),
        notNull: true
    },
    Formato: {
        type: DataTypes.STRING,
        notNull: true
    },
    Nombre: {
        type: DataTypes.STRING,
        notNull: true
    },
    Num_Ejemplares: {
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
    tableName: 'Material',
    paranoid: true
}
);