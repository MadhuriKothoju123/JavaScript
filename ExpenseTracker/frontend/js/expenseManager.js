import { Expense, RecurringExpense } from "./expenseClass.js";

// Closure for Expense Manager
console.log("manager");

const createExpenseManager = () => {
  let expenses = [];
  let income;

  const API_URL = "http://localhost:5000";
  return {
    setMonthlyIncome() {
      income = 25000;
    },
    setYearlyIncome() {
     income= 25000 * 12;
    },
    getIncome() {
      return income;
    },
    async addExpense(expense) {
      console.log(expense, "expense");

      await fetch(`${API_URL}/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Parse JSON response
        })
        .then((data) => {
          console.log("Response data:", data); // Log the actual response
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async getExpenses() {
      const response = await fetch(`${API_URL}/expenses`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Resolve the JSON promise
      console.log(data, "data");

      expenses = data.map((e) => {
        if (e.frequency) {
          return new RecurringExpense(
            e.title,
            e.amount,
            e.category,
            e.date,
            e.frequency
          );
        } else {
          return new Expense(e.title, e.amount, e.category, e.date);
        }
      });
    },
    filterExpenses(start, end) {
      const filteredExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= start && expenseDate <= end;
      });
      return filteredExpenses;
    },
    async getMonthlyExpenses(month, year) {
      return expenses?.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getMonth() + 1 === month &&
          expenseDate.getFullYear() === year
        );
      });
    },

    // Get yearly expenses for a specific year
    async getYearlyExpenses(year) {
      return expenses?.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === year;
      });
    },
    async getFilteredExpenses(month = null, year = null, frequency=null) {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
      const currentYear = currentDate.getFullYear();

      if (month && year) {
        this.setMonthlyIncome();
        return this.getMonthlyExpenses(month, year);
      } else if (year) {
        // Only year is provided
        this.setYearlyIncome();
        return this.getYearlyExpenses(year);
      } else if (month) {
        // Only month is provided
        this.setMonthlyIncome();
        return this.getMonthlyExpenses(month, currentYear);
      } else {
        this.setMonthlyIncome();

        return this.getMonthlyExpenses(currentMonth, currentYear);
      }
    },
    calculateTotalExpenses(expenseData) {
      return expenseData.reduce((total, expense) => total + expense.amount, 0);
    },
  };
};

export default createExpenseManager;
