import Card from "../../UIComponents/Card/Card";
import Button from "../../UIComponents/Button/Button";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import React from "react";

//useState is a React Hook, and allows us to define a specific component state, and when the state changes
//all the component should be loaded again. Thats a key difference between use useState method
//and using the vanilla javascript convention to change variables. Variables could be changed
//but because React works in a Declarative Way the entire component would not be loaded, at least
//we declare that variable as a component state and we call useState React Hook.

import "./ExpenseItem.css";

//Without React & with Regular JS we used Parameters to operate dynamic data.
//We can make our components reusable by using parameters and by using Props.
function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2,  28); //This is just regular javascript. And we can have it.
  //   const expenseTitle = 'Car Insurance';
  //   const expenseAmount = 294.67;

  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <Button className="expense-item__price">{props.amount} USD</Button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
