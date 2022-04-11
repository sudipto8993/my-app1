import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      expenseTitle: "Fuel expenses",
      amount: 204.5,
      expenseDate: new Date(2021, 3, 23),
    },
    {
      expenseTitle: "Money Transfer",
      amount: 5000.0,
      expenseDate: new Date(2021, 2, 24),
    },
    {
      expenseTitle: "Food",
      amount: 1000.56,
      expenseDate: new Date(2020, 1, 25),
    },
  ];
  return (
    <div>
      <ExpenseItem expenseObject={expense[0]} />
      <ExpenseItem expenseObject={expense[1]} />
      <ExpenseItem expenseObject={expense[2]} />
    </div>
  );
}

export default App;
