import { Expense, RecurringExpense } from "./expenseClass.js";

const API_URL = "http://localhost:5000"; // Change as per your backend
const expensesCache = new Map(); // Store fetched expenses

/**
 * Get expenses batch-wise with optional search and filter.
 */
async function* getExpenses(batchSize = 10, month , year, query ) {
  let offset = 0;

  while (true) {
    try {
      // Build API URL with filters and search query
      let url = `${API_URL}/expenses?limit=${batchSize}&offset=${offset}`;
      if (month) url += `&month=${month}`;
      if (year) url += `&year=${year}`;
      if (query) url += `&query=${encodeURIComponent(query)}`;

      const response = await fetch(url);
      console.log(response, "res");
      
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const jsonResponse = await response.json();
      const data = jsonResponse.data || [];
console.log(data, "data")
      if (!data.length) return; // Stop fetching if no more data

      // Convert response data to Expense instances
      const newExpenses = data.map((e) =>
        e.frequency
          ? new RecurringExpense(e.id, e.title, e.amount, e.category, e.date, e.frequency)
          : new Expense(e.id, e.title, e.amount, e.category, e.date)
      );

      // Store in cache
      newExpenses.forEach((exp) => expensesCache.set(exp.id, exp));

      yield newExpenses;

      offset += batchSize; // Move to next batch
    } catch (error) {
      console.error("Error fetching expenses:", error);
      return;
    }
  }
}

/**
 * Fetch expenses based on search query, month, and year filters.
 */
async function* getFilteredExpenses(month = null, year = null, query = null, batchSize = 10) {
  yield* getExpenses(batchSize, month, year, query);
}

/**
 * Add a new expense.
 */
async function addExpense(expense) {
  try {
    const response = await fetch(`${API_URL}/expenses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Added Expense:", data);

    expensesCache.set(data.id, data); // Cache new expense
  } catch (error) {
    console.error("Error adding expense:", error);
  }
}

/**
 * Delete an expense.
 */
async function deleteExpense(id) {
  try {
    expensesCache.delete(id); // Remove from cache

    const response = await fetch(`${API_URL}/expenses/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    console.log(`Expense with ID ${id} deleted.`);
  } catch (error) {
    console.error("Error deleting expense:", error);
  }
}

/**
 * Calculate total expenses.
 */
function calculateTotalExpenses(expenseData) {
  return expenseData.reduce((total, { amount }) => total + amount, 0);
}

/**
 * Get user's monthly income.
 */
async function getIncome() {
  // Dummy function, replace with actual API call if needed
  return 25000;
}

// Export all functions
const createExpenseManager = () => ({
  getExpenses,
  getFilteredExpenses,
  addExpense,
  deleteExpense,
  calculateTotalExpenses,
  getIncome,
});

export default createExpenseManager;
