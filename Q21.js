const personAccount = {
    firstName: "Sujal",
    lastName: "maharjan",
    incomes: [
        { description: "Salary", amount: 5000 },
        { description: "Freelance", amount: 1200 }
    ],
    expenses: [
        { description: "Rent", amount: 1500 },
        { description: "Groceries", amount: 300 }
    ],
    
    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo: function() {
        return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
    },
    
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

console.log(personAccount.accountInfo());
personAccount.addIncome("Investment", 800);
personAccount.addExpense("Utilities", 150);
console.log(personAccount.accountInfo());
console.log("Account Balance: $" + personAccount.accountBalance());
