import "../styling/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseHandler = (saveExpenseHandlerEvent) => {
    const expenseData = {
      ...saveExpenseHandlerEvent,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
