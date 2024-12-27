'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Modify the createdAt and updatedAt columns to have default values
    await queryInterface.changeColumn('Expenses', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    });

    await queryInterface.changeColumn('Expenses', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert back the columns if the migration is undone
    await queryInterface.changeColumn('Expenses', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.changeColumn('Expenses', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
