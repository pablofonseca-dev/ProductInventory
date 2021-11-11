import React, {useState} from "react";
import Button from "../../UIComponents/Button/Button";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

// This is another option to useState in a single state object. 
//   const [userInput, setUserInput] = useState({
//       enteredTitle: '',
//       enteredAmount: '',
//       enteredDate: ''
//   //})

  const titleChangeHandler = (event) => {
      const target = event.target; 
      // This is not correct: setUserInput({...userInput, enteredTitle: target.value});
      // This is correct
      //   setUserInput((prevState) => {
      //     return {...prevState, enteredTitle: target.value}
      //   });
      setEnteredTitle(target.value); 
  };

  const amountChangeHandler = (event) => {
      const target = event.target; 
      setEnteredAmount(target.value);
  };

  const dateChangeHandler = (event) => {
      const target = event.target; 
      setEnteredDate(target.value);
  }

  const requestFormData = (event) => {
      event.preventDefault(); 
    
      const expenseData = {
          title: enteredTitle, 
          amount: enteredAmount, 
          date: new Date(enteredDate)
      };

      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');

      props.onSaveExpenseData(expenseData); 

  }

  return (
    <form onSubmit={requestFormData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
        <Button className="new-expenses__actions--green" type="submit">Add Expense</Button>
        <Button className="new-expenses__actions--red">Cancel</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
