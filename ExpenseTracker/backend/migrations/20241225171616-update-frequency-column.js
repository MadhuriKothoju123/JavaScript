'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Modify the 'frequency' column to allow NULL values
    await queryInterface.changeColumn('Expenses', 'frequency', {
      type: Sequelize.STRING,
      allowNull: true,  // Allow NULL values
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the 'frequency' column back to not allowing NULL values
    await queryInterface.changeColumn('Expenses', 'frequency', {
      type: Sequelize.STRING,
      allowNull: false,  // Disallow NULL values
    });
  },
};
