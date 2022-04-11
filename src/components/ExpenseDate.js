import "../styling/ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.edObject.toLocaleString("en-US", {
    month: "short",
  });
  const day = props.edObject.toLocaleString("en", {
    day: "2-digit",
  });
  const year = props.edObject.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}
export default ExpenseDate;
