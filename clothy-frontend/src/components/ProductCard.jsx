import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};
export default ProductCard;
