import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on mount
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Remove an expense by index
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // Clear all expenses
  const clearAllExpenses = () => {
    setExpenses([]);
  };

  // Calculate total expense
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      <h1 className="text-4xl font-bold text-center mb-5 text-green-200">
        Expense Tracker
      </h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <div className="text-center mt-5 text-xl font-bold text-green-200">
        Total Expense: ₹{totalExpense}
      </div>
      <div className="flex justify-center mt-4">
  <button
    onClick={clearAllExpenses}
    className="bg-green-950 text-white py-2 px-6 rounded hover:bg-green-700">
      Clear All Expenses
  </button>
  </div>

    </div>
  );
}

export default App;
