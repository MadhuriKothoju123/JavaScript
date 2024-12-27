
// Add new expense
const { Expense } = require('../models');
exports.addExpense = async (req, res) => {

  try {
    const { title, amount, category, date , frequency = "Once" } = req.body;
    const newExpense = await Expense.create({ title, amount, category, date, frequency });
    res.status(201).json({
        success: true,
        message: 'Expense created successfully!',
        data: newExpense,
      });
  } catch (error) {
   console.error('Error deleting expense:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete expense.',
      error: error.message,
    });
  }
    
  };

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, expenseCategory, date } = req.body;
    const expense = await Expense.findByPk(id);

    if (!expense) return res.status(404).json({ error: 'Expense not found' });

    await expense.update({ title, amount, expenseCategory, date });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update expense' });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByPk(id);

    if (!expense) return res.status(404).json({ error: 'Expense not found' });

    await expense.destroy();
    res.status(200).json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete expense' });
  }
};
