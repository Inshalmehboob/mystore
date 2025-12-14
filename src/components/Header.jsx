import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../context/cartcontext";
import { AuthContext } from "../context/authcontext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false); // State for Shop dropdown
  const navigate = useNavigate();

  const { itemCount = 0 } = useContext(CartContext) || {};
  const { user, logout } = useContext(AuthContext) || {};

  const toggleShop = () => setShopOpen(prev => !prev);

  // Close mobile menu & dropdown when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    setShopOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          🛍️ <span>My Store</span>
        </div>

        {/* Hamburger for mobile */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Cart & user actions (top-right) */}
        <div className="nav-actions">
          <Link to="/cart" className="cart" data-count={itemCount}>
            🛒
          </Link>

          {user?.role === "admin" && (
            <>
              <span className="username">Hi, Admin</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>

        {/* Navigation links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>

          {/* Shop Dropdown */}
          <div className="dropdown">
            <span className="dropbtn" onClick={toggleShop}>
              Shop ▾
            </span>
            <div className={`dropdown-content ${shopOpen ? "open" : ""}`}>
              <Link to="/men" onClick={handleLinkClick}>Men</Link>
              <Link to="/women" onClick={handleLinkClick}>Women</Link>
              <Link to="/child" onClick={handleLinkClick}>Child</Link>
            </div>
          </div>

          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>

          {user?.role === "admin" && (
            <Link to="/admin" onClick={handleLinkClick}>Admin</Link>
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;
