import { Expense, RecurringExpense } from "./expenseClass.js";
import createExpenseManager from "./expenseManager.js";

// Initialize Expense Manager
const expenseManager = createExpenseManager();

const setExpenses = (async () => {
  await expenseManager.getExpenses();
  const expenses = await loadAllExpenses();
  await getChart(expenses);
})();
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
const currentYear = currentDate.getFullYear();

// Select elements
const monthSelect = document.getElementById("month-select");
const yearSelect = document.getElementById("year-select");

// Set default values
monthSelect.value = currentMonth; // Set current month
yearSelect.value = currentYear; // Set current year

// DOM Elements
const form = document.getElementById("expense-form");
const expenseType = document.getElementById("expense-type");
const frequencyInput = document.getElementById("expense-frequency");
const filterButton = document.getElementById("filterExpenses");

const filteredExpensesTableBody = document.querySelector(
  "#filtered-expenses-table tbody"
);
// Enable/Disable Frequency Input Based on Type
expenseType.addEventListener("change", (event) => {

  if (event.target.value === "recurring") {
    frequencyInput.disabled = false;
    frequencyInput.required = true;
  } else {
    frequencyInput.disabled = true;
    frequencyInput.required = false;
    frequencyInput.value = "";
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("expense-title").value;
  const amount = document.getElementById("expense-amount").value;
  const date = document.getElementById("expense-date").value;
  const type = document.getElementById("expense-type").value;
  const category = document.getElementById("expense-category").value;

  const frequency = document.getElementById("expense-frequency").value;

  if (type === "recurring") {
    expenseManager.addExpense(
      new RecurringExpense(title, amount, category, date, frequency)
    );
  } else {
    expenseManager.addExpense(new Expense(title, amount, category, date));
  }

  form.reset();
  frequencyInput.disabled = true; // Reset frequency input
  await expenseManager.getExpenses();
  const expenses = await loadAllExpenses();
  await getChart(expenses);
});

const renderExpenses = (expenses, tableBody) => {
  tableBody.innerHTML = ""; // Clear the table body before appending new data

  if (expenses.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td colspan="5" style="text-align: center; color: green">No expenses are recorded</td>
    `;
    tableBody.appendChild(row);
  } else {
    expenses.forEach((e) => {
      const row = document.createElement("tr");

      // Check if the item is an instance of RecurringExpense or Expense
      if (e instanceof RecurringExpense) {
        row.innerHTML = `
          <td>${e.title}</td>
          <td>${e.amount.toFixed(2)}</td>
          <td>${e.category}</td>
          <td>${e.getFormattedDate()}</td>
          <td> ${e.frequency}</td> <!-- Add frequency for recurring expenses -->
        `;
      } else if (e instanceof Expense) {
        row.innerHTML = `
          <td>${e.title}</td>
          <td>${e.amount.toFixed(2)}</td>
          <td>${e.category}</td>
          <td>${e.getFormattedDate()}</td>
          
        `;
      }

      tableBody.appendChild(row); // Append the row to the table body
    });
  }
};

filterButton.addEventListener("click", async () => {
  const month = parseInt(monthSelect?.value) || 0;
  const year = parseInt(yearSelect?.value) || 0;
  const expenses = await expenseManager.getFilteredExpenses(month, year);
  renderExpenses(expenses, filteredExpensesTableBody);
  await getChart(expenses);
});

const loadAllExpenses = async () => {
  const expenses = await expenseManager.getFilteredExpenses();
  renderExpenses(expenses, filteredExpensesTableBody);
  return expenses;
};
clearFilter.addEventListener("click", async() => {
  monthSelect.value = currentMonth; // Set current month
  yearSelect.value = currentYear;
 const expenses=await loadAllExpenses();
 await getChart(expenses);
});
let pieChart;
const getChart = async (expenses) => {
  const income = await expenseManager.getIncome(); // Assume this function retrieves income data
  const totalExpenses = expenseManager.calculateTotalExpenses(expenses);

  const totalSavings = income - totalExpenses;
  const expensePercentage = (totalExpenses / income) * 100;
  let expenseColor;

  if (expensePercentage > 75) {
    expenseColor = "rgba(255, 99, 132, 1)"; // Red for high expenses
  } else {
    expenseColor = "rgba(75, 192, 192, 0.6)"; // Green for acceptable expenses
  }

  // Set colors for the pie chart
  const colors = [
    expenseColor, // Expenses color (dynamic)
    "rgba(255, 206, 86, 1)", // Orange for savings
  ];

  const ctx = document
    .getElementById("expensesSavingsIncomePieChart")
    .getContext("2d");
  if (pieChart) {
    pieChart.destroy();
  }
  pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Expenses", "Savings"],
      datasets: [
        {
          label: "Total Amount",
          data: [totalExpenses, totalSavings],
          backgroundColor: colors,
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`;
            },
          },
        },
      },
    },
  });
};
