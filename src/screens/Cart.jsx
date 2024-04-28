import { useContext } from "react";
import { ApplicationContext } from "../App";

const Cart = () => {
  const { selectedItems, setSelectedItem } = useContext(ApplicationContext);

  const selected = selectedItems.filter((item) => item.selected);
  let total = 0;
  selected.forEach((item) => {
    total += item.quantity * item.price;
  });

  return (
    <div className="cart-container">
      {selected.map((item) => (
        <div key={item.id} className="cart">
          <div className="book-name">{item.name} </div>
          <div className="book-quantity">{item.quantity} </div>
          <div className="book-price">{item.price} </div>
        </div>
      ))}

      <div>Total</div>
      <div>{total}</div>
    </div>
  );
};

export default Cart;
