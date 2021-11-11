import { useState } from "react/cjs/react.development";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return (expense.date.getFullYear().toString() === selectedYear);
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        onSelectedYear={yearChangeHandler}
        expensesCollection={props.expenses}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses}/>
    </div>
  );
}

export default Expenses;
