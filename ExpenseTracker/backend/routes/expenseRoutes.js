const express = require('express');
const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.post('/', addExpense);
router.get('/', getExpenses); // Get all expenses
router.put('/:id', updateExpense); // Update expense
router.delete('/:id', deleteExpense); // Delete expense

module.exports = router;
