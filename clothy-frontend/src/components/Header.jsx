import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <div className="brand">
        <h2>Zyraa's Fashion</h2>
      </div>
      <nav>
       
        <Link to="/cart">Cart ({cart.reduce((a, c) => a + c.qty, 0)})</Link>
      </nav>
    </header>
  );
};

export default Header;
