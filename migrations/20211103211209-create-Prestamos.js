'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prestamos', {
      /* Cod_Usuario: {
         primaryKey: true,
         type: Sequelize.BIGINT,
         notNull: true,
         unsigned: true
       },
       Cod_Material: {
         primaryKey: true,
         type: Sequelize.BIGINT,
         notNull: true,
         unsigned: true
       },*/
      Fecha_Prestamo: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Fecha_Entrega: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Multa_Dia: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Prestamos');
  }
};