import ExpendItem from "./ExpendItem";
import "./ExpendList.css";

const ExpendList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpendItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpendList;
