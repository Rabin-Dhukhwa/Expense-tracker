import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = ({ onSaveExpenseData }) => {
  //using multiple useState
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  //single useState  for multiple events
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  //   console.log(userInput);

  const titleChangeHandler = (event) => {
    //setting the state when multiple useState
    // setEnteredTitle(e.target.value);

    //setting the state for single useState for multiple events/ Do not use this , it might not work because react schedule state update and it does not perform instantly
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    //setting the state for single useState by passing callback updater function in state update function i.e setUserInput
    //
    // you should use this when ever your state update depends on the previous state
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    // console.log(expenseData);
    onSaveExpenseData(expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
