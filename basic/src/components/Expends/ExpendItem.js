import "./ExpendItem.css";
import ExpendDate from "./ExpendDate";
import Card from "../UI/Card";

const ExpendItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpendDate date={props.date}></ExpendDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpendItem;
