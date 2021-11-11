import Button from "../../UIComponents/Button/Button";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const ExpenseAdder = (props) => {
  if (!props.expenseRequested) {
    return <Button onClick={props.presentFormView}>Add New Expense</Button>;
  }

  return <ExpenseForm onSaveExpenseData={props.saveExpenseDataHandler} />;
};

export default ExpenseAdder;
