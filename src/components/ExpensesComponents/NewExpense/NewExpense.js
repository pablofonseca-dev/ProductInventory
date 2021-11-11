import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import './NewExpense.css';
import ExpenseAdder from "../ExpenseAdder/ExpenseAdder";

const NewExpense = (props) => {
    const [expenseRequested, setExpenseRequested] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        }
        props.onExpenseAdded(expenseData);
    }
    
    const expenseRequestedDataHandler = () => {
        setExpenseRequested(true);
    }    

    return (
        <div className="new-expense">
            <ExpenseAdder presentFormView={expenseRequestedDataHandler} saveExpenseDataHandler={saveExpenseDataHandler} expenseRequested={expenseRequested}/>
        </div>
    );
}

export default NewExpense; 