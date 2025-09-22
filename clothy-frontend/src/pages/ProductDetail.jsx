import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: "300px" }} />
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
export default ProductDetail;
