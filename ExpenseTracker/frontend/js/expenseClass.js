// Base Expense Class
console.log("classes");

class Expense {
  constructor(id, title, amount, category, date) {
    this.id = id;
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
  constructor(id, title, amount, category, date, frequency) {
    super(id, title, amount, category, date);
    this.frequency = frequency;
  }

  toString() {
    return `${super.toString()} (Recurring: ${this.frequency})`;
  }
}

export { Expense, RecurringExpense };
