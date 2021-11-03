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
        type: DataTypes.JSON,
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
        type: DataTypes.VARCHAR,
        notNull: true
    },
    Codigo_Barras: {
        type: DataTypes.VARCHAR,
        notNull: true
    },
    Num_Ejemplares: {
        type: DataTypes.INTEGER,
        notNull: true
    },


}, {
    tableName: 'Material',
    paranoid: true
}
);