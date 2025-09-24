import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/Payment"); // ✅ go to Payment page
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Your Shopping Cart</h1>
        <p>Review your selected items before checkout.</p>
      </section>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#6d4c41" }}>
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.qty}</p>
                  <p>Price: ₹{item.price * item.qty}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
              <button onClick={clearCart}>Clear Cart</button>
              <button
                onClick={handleBuyNow}
                style={{ background: "#ffcc80", color: "#4e342e" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
