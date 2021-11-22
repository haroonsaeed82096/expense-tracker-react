import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>22 Novermber 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">5000 Euro</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
