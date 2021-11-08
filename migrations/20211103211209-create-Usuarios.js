'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      Codigo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Contraseña: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cedula: {
        type: Sequelize.BIGINT,
        unsigned: true,
        allowNull: false,
      },
      Correo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      F_Nacimiento: {
        type: Sequelize.DATE
      },
      Carrera: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};