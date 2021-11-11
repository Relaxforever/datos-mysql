'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reserva', {
      /* Cod_Usuario: {
         primaryKey: true,
         type: Sequelize.BIGINT,
         notNull: true,
         unsigned: true
       },
       Sala_Codigo: {
         primaryKey: true,
         type: Sequelize.BIGINT,
         notNull: true,
         unsigned: true
       },*/
      Codigo: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        notNull: true,
        unsigned: true,
        autoIncrement: true
      },
      Horario_Inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Horario_Final: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Disponibilidad: {
        type: Sequelize.ENUM("Disponible", "Ocupado"),
        allowNull: false
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
    await queryInterface.dropTable('Reserva');
  }
};