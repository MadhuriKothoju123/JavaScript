'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Rename the column in the `expenses` table
    await queryInterface.renameColumn('Expenses', 'tittle', 'title');
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the column name back to the original
    await queryInterface.renameColumn('Expenses', 'title', 'tittle');
  },
};
