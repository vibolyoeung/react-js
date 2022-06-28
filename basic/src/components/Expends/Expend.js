import React, { useState } from "react";
import "./Expend.css";
import Card from "../UI/Card";
import ExpendFilter from "./ExpendFilter";
import ExpendList from "./ExpendList"
import ExpendBar from "./ExpendBar";

const Expend = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const seletctionChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const expensesFiltered = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpendFilter
          selected={selectedYear}
          onSelectionChange={seletctionChangeHandler}
        />
        <ExpendBar expenses={expensesFiltered} />
        <ExpendList items={expensesFiltered} />
      </Card>
    </div>
  );
};

export default Expend;
