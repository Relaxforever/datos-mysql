'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalaEstudio', {
      Codigo: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        unsigned: true
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Inventario: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      Num_Personas_Max: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('SalaEstudio');
  }
};