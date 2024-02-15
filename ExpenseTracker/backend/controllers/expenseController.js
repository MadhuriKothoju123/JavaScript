// Add new expense
const { Op } = require("sequelize");
const { Expense } = require("../models");
exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category, date, frequency = "Once" } = req.body;

    const newExpense = await Expense.create({
      title,
      amount,
      category,
      date,
      frequency,
    });
    res.status(201).json({
      success: true,
      message: "Expense created successfully!",
      data: newExpense,
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete expense.",
      error: error.message,
    });
  }
};

// Get paginated expenses using limit & offset
exports.getExpenses = async (req, res) => {
  try {
    const { query, month, year, limit = 10, offset = 0 } = req.query;
    let whereCondition = {};

    // Apply month and year filter if provided, otherwise fetch all data
    if (month && year) {
      whereCondition.date = {
        [Op.and]: [
          { [Op.gte]: new Date(year, month - 1, 1) },
          { [Op.lt]: new Date(year, month, 1) },
        ],
      };
    }

    // Apply search filter if query is present
    if (query) {
      if (!whereCondition[Op.and]) whereCondition[Op.and] = [];
      whereCondition[Op.and].push({
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { category: { [Op.iLike]: `%${query}%` } },
        ],
      });
    }

    // Fetch sorted, filtered, and searched expenses with pagination (latest first)
    const expenses = await Expense.findAll({
      where: whereCondition,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["date", "DESC"]], // Ensure latest expenses appear first
    });

    res.status(200).json({ success: true, data: expenses });
  } catch (error) {
    console.error("Error searching expenses:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.searchExpenses = async (req, res) => {
  try {
    const { query, limit = 10, offset = 0 } = req.query;
    if (!query)
      return res.status(400).json({ error: "Search query is required" });

    const expenses = await Expense.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { category: { [Op.iLike]: `%${query}%` } },
          { date: { [Op.eq]: query } },
        ],
      },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.status(200).json({ success: true, data: expenses });
  } catch (error) {
    console.error("Error searching expenses:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to search expenses" });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByPk(id);

    if (!expense) return res.status(404).json({ error: "Expense not found" });

    await expense.destroy();
    res.status(200).json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete expense" });
  }
};
