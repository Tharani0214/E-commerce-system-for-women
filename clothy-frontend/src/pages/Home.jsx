import { Link } from "react-router-dom";

const Home = () => {
  const categories = ["Kurti", "Co-ords", "Tunics", "Salwar Set", "Dresses"];

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Zyraa's World!</h1>
        <h2>Elevate your everyday style.</h2>
        <p>
          Discover our exclusive collections of Kurtis, Co-ords, Tunics, Salwar Sets, and Dresses.
        </p>
      </section>

      {/* Category Highlights */}
      <section className="categories">
        <h3>Shop by Category</h3>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <Link key={index} to={`/category/${cat}`} className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo">
        <h3>Why Choose Us?</h3>
        <div className="promo-cards">
          <div className="promo-card">
            <h4>Premium Fabrics</h4>
            <p>Only the finest fabrics to keep you stylish & comfortable.</p>
          </div>
          <div className="promo-card">
            <h4>Elegant Designs</h4>
            <p>Unique and Comfortness at every wear.</p>
          </div>
          <div className="promo-card">
            <h4>Fast Shipping</h4>
            <p>Quick delivery to your doorstep with easy returns.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
