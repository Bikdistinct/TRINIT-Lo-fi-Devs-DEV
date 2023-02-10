import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#">FarmStack</a>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <a href="#">Get Started</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </div>
        <div className="navbar-burger" onClick={() => setOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;