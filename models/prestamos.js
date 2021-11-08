'use strict';
const {
  DataTypes
} = require('sequelize');
module.exports = sequelize.define('Prestamos', {
  /*Cod_Usuario: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    notNull: true,
    unsigned: true
  },
  Cod_Material: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    notNull: true,
    unsigned: true
  },*/
  Fecha_Prestamo: {
    type: DataTypes.DATE,
    notNull: true
  },
  Fecha_Entrega: {
    type: DataTypes.DATE,
    notNull: true,
  },
  Multa_Dia: {
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
  tableName: 'Prestamos',
  paranoid: true
});