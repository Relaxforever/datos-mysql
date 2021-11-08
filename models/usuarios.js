'use strict';
const {
  DataTypes
} = require('sequelize');
module.exports = sequelize.define('Usuarios', {
  Codigo: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    notNull: true,
    unsigned: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    notNull: true,
  },
  Contraseña: {
    type: DataTypes.STRING,
    notNull: true,
  },
  Cedula: {
    type: DataTypes.BIGINT,
    unsigned: true,
    notNull: true,
  },
  Correo: {
    type: DataTypes.STRING,
    unique: true,
    notNull: true
  },
  F_Nacimiento: {
    type: DataTypes.DATE
  },
  Carrera: {
    type: DataTypes.STRING
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
  tableName: 'Usuarios',
  paranoid: true
}
);