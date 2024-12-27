// Base Expense Class
console.log("classes");

class Expense {
  constructor(title, amount, category, date) {
    this.title = title;
    this.amount = parseFloat(amount);
    this.category = category;
    this.date = new Date(date);
  }

  getFormattedDate() {
    return this.date.toLocaleDateString();
  }

  toString() {
    return `${this.title} - ${this.amount.toFixed(
      2
    )} on ${this.getFormattedDate()}`;
  }
}

// Recurring Expense Class
class RecurringExpense extends Expense {
  constructor(title, amount, category, date, frequency) {
    super(title, amount, category, date);
    this.frequency = frequency;
  }

  toString() {
    return `${super.toString()} (Recurring: ${this.frequency})`;
  }
}

export { Expense, RecurringExpense };
