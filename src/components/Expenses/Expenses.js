import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
const Expenses = ({ expenses }) => {
  //directly destructuring the props object, props always comes in object to child component
  // console.log(expenses);
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  // console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

// alternative ways to use the same code above
// {
//   /* {filteredExpenses.length === 0 && <p>no expenses found</p>}// dynamic
//         expression
//         {filteredExpenses.length > 0 &&
//           filteredExpenses.map((expense) => (
//             <ExpenseItem
//               key={expense.id}
//               title={expense.title}
//               amount={expense.amount}
//               date={expense.date}
//             />
//           ))} */
// }
