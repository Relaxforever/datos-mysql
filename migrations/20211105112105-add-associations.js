'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Prestamos', 'Cod_Usuario',
      {
        type: Sequelize.BIGINT,
        allowNull: false,
        unsigned: true,
        // primaryKey: true,
        foreignKey: true,
        references: {
          model: 'Usuarios',
          key: 'Codigo'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    ).then(() => {
      return queryInterface.addColumn('Prestamos', 'Cod_Material',
        {
          type: Sequelize.BIGINT,
          // primaryKey: true,
          foreignKey: true,
          allowNull: false,
          unsigned: true,
          references: {
            model: 'Material',
            key: 'Codigo'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      )
    }).then(() => {
      return queryInterface.addColumn('Reserva', 'Cod_Usuario',
        {
          type: Sequelize.BIGINT,
          allowNull: false,
          unsigned: true,
          // primaryKey: true,
          foreignKey: true,
          references: {
            model: 'Usuarios',
            key: 'Codigo'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
      )
    }).then(() => {
      return queryInterface.addColumn('Reserva', 'Cod_Sala',
        {
          type: Sequelize.BIGINT,
          allowNull: false,
          unsigned: true,
          // primaryKey: true,
          foreignKey: true,
          references: {
            model: 'SalaEstudio',
            key: 'Codigo'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      )
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
