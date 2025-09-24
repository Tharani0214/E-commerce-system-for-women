import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate("/")}>
        Zyraa's Fashion cart
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          {currentUser ? (
            <>
              <span className="user-name">Hello, {currentUser.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
