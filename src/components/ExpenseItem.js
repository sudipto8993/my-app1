import { useState } from "react";
import "../styling/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // function clickFunction() {
  //   console.log("clicked");
  // }
  const [title, setTitle] = useState(props.expenseObject.expenseTitle);
  function clickFunction() {
    setTitle("Updated!!");
  }
  const edDateObject = props.expenseObject.expenseDate;
  return (
    <div className="expense-item">
      <ExpenseDate edObject={edDateObject} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          Rs {props.expenseObject.amount}
        </div>
      </div>
      <button onClick={clickFunction}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
