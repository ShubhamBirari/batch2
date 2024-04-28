import { useContext } from "react";
import { ApplicationContext } from "../App";

const Card = ({ book }) => {
  const { selectedItems, setSelectedItem } = useContext(ApplicationContext);

  const handleAdd = (id) => {
    let items = [...selectedItems];
    items = items.map((item) => {
      let temp = { ...item };
      if (item.id === id) {
        temp.quantity = temp.quantity + 1;
        temp.selected = true;
      }
      return temp;
    });

    setSelectedItem([...items]);
  };

  const handleDelete = (id) => {
    let items = [...selectedItems];
    items = items.map((item) => {
      let temp = { ...item };
      if (item.id === id) {
        temp.quantity = temp.quantity === 0 ? 0 : temp.quantity - 1;
        temp.selected = temp.quantity > 0;
      }
      return temp;
    });

    setSelectedItem([...items]);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src="https://m.media-amazon.com/images/I/41-1-O8SqXL._SX300_SY300_QL70_FMwebp_.jpg" />
      </div>

      <div className="card-body">
        <div>{book.name}</div>
        <div>{book.price}</div>
      </div>

      <div className="card-footer">
        <div>
          <button onClick={() => handleDelete(book.id)}>-</button>
        </div>
        <div>{book.quantity}</div>
        <div>
          <button onClick={() => handleAdd(book.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
