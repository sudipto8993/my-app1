import { useState } from "react";
import "../styling/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
  };

  const amountChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChange = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const formChange = (event) => {
    event.preventDefault();

    const expenseData = {
      enteredTitle: title,
      enteredAmount: amount,
      enteredDate: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSaveExpenseForm(expenseData);
    //console.log(expenseData);
  };
  return (
    <form onSubmit={formChange}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChange} />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChange}
          />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="24-04-1989"
            max="20-01-2050"
            onChange={dateChange}
          />
        </div>
        <div className="expense-form__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
