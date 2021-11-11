import Expenses from "./components/ExpensesComponents/Expenses/Expenses";
import NewExpense from "./components/ExpensesComponents/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpenseDataHandler = expense => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    //This is not normal JS Code, this is a feature called JSX. 
    // JSX: JavaScript XML. This works because there are transformation steps behind the scenes. 
    <div>
      <NewExpense onExpenseAdded={newExpenseDataHandler} />
      <Expenses expenses={expenses} /> 
    </div>
  );
}

//In modern JS if you have an object and you wanna use it in another file you need to export it. 
export default App;
