import NewExpense from "./components/NewExpense";

const onAddExpenseHandler = (eventExpenseData) => {
  const myExpense = {
    ...eventExpenseData,
    id: Math.random.toString(),
  };
  console.log(eventExpenseData);
};

const App1 = () => {
  return <NewExpense onAddExpense={onAddExpenseHandler} />;
};

export default App1;
