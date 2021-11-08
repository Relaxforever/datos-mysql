'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Material', {
      Codigo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
      },
      F_Publicacion: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Autores: {
        type: Sequelize.JSON,
      },
      Disponibilidad: {
        type: Sequelize.ENUM("Disponible", "Agotado"),
        allowNull: false
      },
      Formato: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Num_Ejemplares: {
        type: Sequelize.INTEGER,
        notNull: true
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
    await queryInterface.dropTable('Material');
  }
};