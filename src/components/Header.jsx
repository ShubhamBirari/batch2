import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../App";

const Header = () => {
  const { selectedItems } = useContext(ApplicationContext);

  const item = selectedItems.filter((item) => item.selected);

  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart
        {item.length > 0 && <label className="cartItems">{item.length}</label>}
      </Link>
    </div>
  );
};

export default Header;
