import { useState } from "react";
import { useCart } from "../context/CartContext";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", card: "", expiry: "", cvv: "" });

  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.card || !form.expiry || !form.cvv) {
      alert("Please fill all fields");
      return;
    }
    alert(`Payment Successful! You paid ₹${total}`);
    clearCart();
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="card"
            placeholder="Card Number"
            value={form.card}
            onChange={handleChange}
          />
          <div className="payment-row">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={form.cvv}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Pay ₹{total}</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
