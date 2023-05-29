import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropDownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
    // console.log(typeof e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
// ExpensesFilter is controlled component because,
// A controlled component in React is a form element, such as an input field or a textarea, whose value is controlled by React's state. The state value is typically initialized and updated through state management techniques, such as using the useState hook. The value of the controlled component is set explicitly through the value attribute, and any changes to the component's value are handled through event callbacks, such as onChange. The state acts as a single source of truth, allowing React to manage and synchronize the component's value.
// and the useState which is controlling ExpensesFilter is in Expenses.js Component
