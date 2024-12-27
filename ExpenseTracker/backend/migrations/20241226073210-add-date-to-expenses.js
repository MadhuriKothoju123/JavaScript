'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Expenses', 'date', {
      type: Sequelize.DATE,
      allowNull: false, // Adjust based on your requirements
      defaultValue: Sequelize.NOW, // Optional: Set a default value
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Expenses', 'date');
  },
};
