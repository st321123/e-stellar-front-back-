import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="images/logo.jpg" alt="logo" />
        <h1>E-Stellar</h1>
      </div>
      <nav className="navbars">
        <Link to="/" className="homeBar">
          <i className="fa-solid fa-house"></i>
          <h2>Home</h2>
        </Link>
        <Link to="/men" className="homeBar">
          <i className="fa-solid fa-shapes"></i>
          <h2>Men's</h2>
        </Link>
        <Link to="/women" className="homeBar">
          <i className="fa-solid fa-bag-shopping"></i>
          <h2>Women's</h2>
        </Link>
        <Link to="/kid" className="homeBar">
          <i className="fa-solid fa-child"></i>
          <h2>Kids</h2>
        </Link>
      </nav>
      <div className="navBtn">
        <Link to="/cart" className="basketNav">
          <img src="images/basket.jpg" alt="basketIcon" />
          <span>{getTotalCartItems()}</span>
        </Link>
        {localStorage.getItem("auth-token") ? (
          <button onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </button>
        ) : (
          <Link to="/login">
            <button>
              <i className="fa-regular fa-user"></i> Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
