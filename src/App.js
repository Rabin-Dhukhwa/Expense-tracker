import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import { NewExpense } from "./components/NewExpense/NewExpense";

const initial_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_Expenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses((previousState) => {
      return [newExpense, ...previousState];
    });
  };

  // React is used here under the hood when using jxs
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );

  // // This is the older way where you need React object where you need to import React
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get Started"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
};

export default App;

// export const App = () => {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );
// };
