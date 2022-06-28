import "./App.css";
import Expend from "./components/Expends/Expend";
import NewExpend from "./components/NewExpend/NewExpend";
import React, { useState } from "react";

const INITIAL_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);
  const addingNewHandler = (expense) => {
    setExpenses((prevExpense) => {
      console.log('abc', expense);
      return [expense, ...prevExpense];
    });
    console.log(2222, expenses);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpend onAddingNew={addingNewHandler} />
        <Expend items={expenses} />
      </header>
    </div>
  );
};

export default App;
