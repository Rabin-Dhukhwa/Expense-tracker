import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import { NewExpense } from "./components/NewExpense/NewExpense";
import "./App.css";

const initial_Expenses = [
  // {
  //   id: "e1",
  //   title: "Grocery",
  //   amount: 99.99,
  //   date: new Date(2023, 5, 14),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_Expenses);
  const [displayScreen, setDisplayScreen] = useState(false);
  const [formInput, setFormInput] = useState({ enterName: "", enterEmail: "" });

  //initial page display
  const enterHandler = () => {
    setDisplayScreen(true);
  };

  const nameChangeHandler = (e) => {
    setFormInput((previousState) => {
      return { ...previousState, enterName: e.target.value };
    });
  };
  const emailChangeHandler = (e) => {
    setFormInput((previousState) => {
      return { ...previousState, enterEmail: e.target.value };
    });
  };

  const addExpenseHandler = (newExpense) => {
    setExpenses((previousState) => {
      return [newExpense, ...previousState];
    });
  };

  // React is used here under the hood when using jxs
  return (
    <div>
      {!displayScreen && (
        <div className="container">
          <h2>Welcome To Expense Tracker</h2>
          <p>Take charge of your financial future</p>
          <form className="entryForm" onSubmit={enterHandler}>
            <input
              type="text"
              className="initialInput"
              placeholder="Enter your name"
              onChange={nameChangeHandler}
              required
            />
            <input
              type="email"
              className="initialInput"
              placeholder="Enter your email"
              onChange={emailChangeHandler}
              required
            />
            <button type="submit" className="initialBtn">
              Enter
            </button>
          </form>
        </div>
      )}
      {displayScreen && (
        <div className="allDisplay">
          <div>Welcome {formInput.enterName}</div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={expenses} />
        </div>
      )}
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
