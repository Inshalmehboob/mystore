import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../context/cartcontext";
import { AuthContext } from "../context/authcontext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { itemCount = 0 } = useContext(CartContext) || {};
  const { user, logout } = useContext(AuthContext) || {};

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="nav-container">

        <div className="logo" onClick={() => navigate("/")}>
          🛍️ <span>My Store</span>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <button className="dropbtn" onClick={toggleMenu}>
              Shop ▼
            </button>

            {menuOpen && (
              <div className="dropdown-content">
                <Link to="/men" onClick={() => setMenuOpen(false)}>Men</Link>
                <Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link>
                <Link to="/child" onClick={() => setMenuOpen(false)}>Child</Link>
              </div>
            )}
          </div>

          
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>   

         
          {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        </nav>

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

      </div>
    </header>
  );
};

export default Header;
