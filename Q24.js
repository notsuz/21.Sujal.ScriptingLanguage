const personAccount = {
    firstName: "Sujal",
    lastName: "Maharjan",
    incomes: [
        { description: "Salary", amount: 5000 },
        { description: "Salesman", amount: 1200 },
    ],
    expenses: [
        { description: "Rent", amount: 1500 },
        { description: "Groceries", amount: 300 },
    ],

    totalIncome: function () {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense: function () {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo: function () {
        return `Account Owner: ${this.firstName} ${this.lastName}\n` +
               `Total Income: ${this.totalIncome()}\n` +
               `Total Expense: ${this.totalExpense()}\n` +
               `Balance: ${this.accountBalance()}`;
    },

    addIncome: function (description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage
console.log(personAccount.accountInfo());

personAccount.addIncome("Bonus", 500);
personAccount.addExpense("Utilities", 200);

console.log("\nAfter adding new income and expense:");
console.log(personAccount.accountInfo());
