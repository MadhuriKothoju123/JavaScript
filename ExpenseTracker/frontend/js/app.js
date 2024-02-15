import { Expense, RecurringExpense } from "./expenseClass.js";
import createExpenseManager from "./expenseManager.js";

// Initialize Expense Manager
const expenseManager = createExpenseManager();
let expensesGenerator = null;
let isLoading = false; // Prevents duplicate API calls
let pieChart = null; // Store reference to the chart

// Cache elements
const filteredExpensesTableBody = document.querySelector(
  "#filtered-expenses-table tbody"
);
const tableContainer = document.querySelector(".table-container");
const monthSelect = document.getElementById("month-select");
const yearSelect = document.getElementById("year-select");
const filterButton = document.getElementById("filterExpenses");
const chartContainer = document.getElementById(
  "expensesSavingsIncomePieChart"
).parentElement;
const clearFilterButton = document.getElementById("clearFilter");
const searchInput = document.getElementById("search-input");
const expenseType = document.getElementById("expense-type");
const frequencyInput = document.getElementById("expense-frequency");
const form = document.getElementById("expense-form");

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
      new RecurringExpense(null,title, amount, category, date, frequency)
    );
  } else {
    expenseManager.addExpense(new Expense(null,title, amount, category, date));
  }

  form.reset();
  frequencyInput.disabled = true; // Reset frequency input
  searchInput.value = "";
  monthSelect.value = "";
  yearSelect.value = "";

  expensesGenerator = expenseManager.getExpenses(5); // Load latest expenses
  await loadNextBatch();
  setupScrollListener();
  // const expenses = await loadAllExpenses();
  // await getChart(expenses);
});

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
const loadNextBatch = async () => {
  if (isLoading || !expensesGenerator) return;
  isLoading = true;

  const { value: expenses, done } = await expensesGenerator.next();
  if (!expenses || done) {
    removeScrollListener(); // Stop fetching if no more data
    return;
  }

  appendExpenses(expenses);
  isLoading = false;
};
(async () => {
  expensesGenerator = expenseManager.getExpenses(5); // Load latest expenses
  await loadNextBatch();
  setupScrollListener();
})();

const loadFilteredExpenses = async () => {
  const month = parseInt(monthSelect.value) || null;
  const year = parseInt(yearSelect.value) || null;
  const query = searchInput.value.trim() || null; // Get search query

  if (!year && !query) {
    alert("Please select a year before applying filters or search.");
    return;
  }

  filteredExpensesTableBody.innerHTML = ""; // Clear table before applying filters

  // Fetch filtered and searched expenses
  expensesGenerator = expenseManager.getFilteredExpenses(month, year, query, 4);
  await loadNextBatch();

  setupScrollListener();
  chartContainer.style.display = query ? "none" : "block";
  if (!query) getChart(await getAllLoadedExpenses());
};
const getAllLoadedExpenses = async () => {
  let allExpenses = [];
  for await (const batch of expenseManager.getFilteredExpenses(
    parseInt(monthSelect.value) || null,
    parseInt(yearSelect.value) || null,
    10
  )) {
    allExpenses.push(...batch);
  }
  return allExpenses;
};

const appendExpenses = (expenses) => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector("#expense-template");
  if (expenses.length === 0) {
    console.log("Hello");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td colspan="5" style="text-align: center; color: green">No expenses are recorded</td>
    `;
    fragment.appendChild(row);
    filteredExpensesTableBody.appendChild(fragment);
  } else {
    expenses.forEach((e) => {
      const row = template.content.cloneNode(true);
      row.querySelector(".title").textContent = e.title;
      row.querySelector(".amount").textContent = e.amount.toFixed(2);
      row.querySelector(".category").textContent = e.category;
      row.querySelector(".date").textContent = e.getFormattedDate();

      if (e instanceof RecurringExpense) {
        row.querySelector(".frequency").textContent = e.frequency;
      } else {
        row.querySelector(".frequency").remove();
      }

      row.querySelector(".delete-btn").setAttribute("data-id", String(e.id));
      fragment.appendChild(row);
    });

    filteredExpensesTableBody.appendChild(fragment);
  }
};

clearFilterButton.addEventListener("click", async () => {
  if (!yearSelect.value && !monthSelect.value) return;
  monthSelect.value = ""; // Reset month dropdown
  yearSelect.value = ""; // Reset year dropdown

  filteredExpensesTableBody.innerHTML = ""; // Clear existing table content
  const query = searchInput.value.trim() || null;
  if (!query)
    expensesGenerator = expenseManager.getExpenses(
      10,
      null,
      null,
      null
    ); // Reset generator to fetch all expenses
  else {
    await loadFilteredExpenses(); // Fetch expenses with search query
  }
  await loadNextBatch(); // Fetch latest expenses
  setupScrollListener();

  chartContainer.style.display = "none";
});

const debounce = (func, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

// Attach event listener for search input
searchInput.addEventListener(
  "input",
  debounce(async () => {
    const query = searchInput.value.trim();
    const year = parseInt(yearSelect.value) || null;
    filteredExpensesTableBody.innerHTML = ""; // Clear previous results

    if (!query && !year) {
      expensesGenerator = expenseManager.getExpenses(10); // Fetch all expenses if search is empty
    } else {
      expensesGenerator = await loadFilteredExpenses();
    }

    await loadNextBatch();
  }, 300)
);

// searchButton.addEventListener("click", loadFilteredExpenses);
filterButton.addEventListener("click", loadFilteredExpenses);

// **🔹 Scroll Listener for Table Body**
const setupScrollListener = () => {
  tableContainer.addEventListener("scroll", handleTableScroll);
};

// **🔹 Remove Scroll Listener When No More Data**
const removeScrollListener = () => {
  tableContainer.removeEventListener("scroll", handleTableScroll);
};

// **🔹 Check Scroll Position in Table Body & Trigger Load**
const handleTableScroll = async () => {
  if (
    tableContainer.scrollTop + tableContainer.clientHeight >=
    tableContainer.scrollHeight - 10
  ) {
    await loadNextBatch();
  }
};

// **🔹 Generate Pie Chart**
const getChart = async (expenses) => {
  if (!expenses.length) {
    chartContainer.style.display = "none"; // Hide chart if no data
    return;
  }

  chartContainer.style.display = "block"; // Show chart if there is data

  const income = await expenseManager.getIncome();
  const totalExpenses = expenseManager.calculateTotalExpenses(expenses);
  const totalSavings = income - totalExpenses;
  const expensePercentage = (totalExpenses / income) * 100;

  const colors = [
    expensePercentage > 75
      ? "rgba(255, 99, 132, 1)"
      : "rgba(75, 192, 192, 0.6)",
    "rgba(255, 206, 86, 1)",
  ];

  const ctx = document
    .getElementById("expensesSavingsIncomePieChart")
    ?.getContext("2d");
  if (!ctx) return;

  if (pieChart) pieChart.destroy();

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
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label: (tooltipItem) =>
              `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`,
          },
        },
      },
    },
  });
};
