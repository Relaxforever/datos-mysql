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
    type: DataTypes.VARCHAR,
    unique: true,
    notNull: true
  },
  F_Nacimiento: {
    type: DataTypes.Date
  },
  Carrera: {
    type: DataTypes.VARCHAR
  }

}, {
  tableName: 'Usuarios',
  paranoid: true
}
);