"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert data into the expenses table
    await queryInterface.bulkInsert("Expenses", [
      {
        title: "Groceries",
        amount: 200,
        category: "Food",
        frequency: "one-time",
      },
      {
        title: "Electricity Bill",
        amount: 100,
        category: "Utilities",
        frequency: "Monthly",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete("Expenses", null, {});
  },
};
