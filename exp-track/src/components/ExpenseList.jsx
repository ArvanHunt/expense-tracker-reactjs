import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="bg-green-400 shadow-md rounded p-4 max-w-md mx-auto">
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-3 border-b pb-2"
          >
            <div>
              <p className="font-bold">{expense.name}</p>
              <p className="text-gray-500">${expense.amount.toFixed(2)}</p>
            </div>
            <button
              onClick={() => deleteExpense(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No expenses added yet.</p>
      )}
    </div>
  );
}

export default ExpenseList;
