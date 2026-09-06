// let expenses = [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const expenseForm = document.getElementById("expenseForm");
const totalExpense = document.getElementById("totalExpense");
const transactionCount = document.getElementById("transactionCount");
const averageExpense = document.getElementById("averageExpense");
const clearExpenses = document.getElementById("clearExpenses");

function updateDashboard() {
    const total = expenses.reduce(function(sum, expense) {
        return sum + expense.amount;
    }, 0);

    totalExpense.textContent = `₹${total.toFixed(2)}`;
    transactionCount.textContent = expenses.length;

    const average = expenses.length > 0 ? total / expenses.length : 0;
    averageExpense.textContent = `₹${average.toFixed(2)}`;
}

updateDashboard();
 
clearExpenses.addEventListener("click", function() {
    expenses = [];
    localStorage.removeItem("expenses");
    updateDashboard();
});

expenseForm.addEventListener("submit", function(event) {
event.preventDefault();


const amount = Number(amountInput.value);
const category = categoryInput.value;
const date = dateInput.value;
const description = descriptionInput.value;

if (amount <= 0 || category === "" || date === "") {
    alert("Please enter valid expense details.");
    return;
}

  const expense = {
    amount: amount,
    category: category,
    date: date,
    description: description
};
   
   expenses.push(expense);

   localStorage.setItem("expenses", JSON.stringify(expenses));

   updateDashboard();
});

   const average = expenses.length > 0 ? total / expenses.length : 0;

averageExpense.textContent = `₹${average.toFixed(2)}`;

