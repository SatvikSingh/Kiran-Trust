import React from "react";
import './Header.css'
import logo from '../../../assets/company-logo.png'

const Header = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <img id="company-logo" src={logo} alt="Company Logo" />
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav no-search">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Doctors</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
