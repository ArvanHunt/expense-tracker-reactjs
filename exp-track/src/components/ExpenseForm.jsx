import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addExpense({ name, amount: parseFloat(amount) });
      setName("");
      setAmount("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-green-400 shadow-md rounded p-4 mb-5 max-w-md mx-auto"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Expense Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="e.g., Groceries"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="e.g., 50"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-700"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
