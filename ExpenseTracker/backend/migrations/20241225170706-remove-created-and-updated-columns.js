'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the 'createdAt' and 'updatedAt' columns
    await queryInterface.removeColumn('Expenses', 'createdAt');
    await queryInterface.removeColumn('Expenses', 'updatedAt');
  },

  down: async (queryInterface, Sequelize) => {
    // Re-add the 'createdAt' and 'updatedAt' columns if rolling back
    await queryInterface.addColumn('Expenses', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    });

    await queryInterface.addColumn('Expenses', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    });
  },
};
