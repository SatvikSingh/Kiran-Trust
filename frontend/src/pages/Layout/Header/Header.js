import React from "react";
import "./Header.css";
import logo from "../../../assets/company-logo.png";
// import {Helmet} from "react-helmet";
const Header = () => {
  return (
    <section className="navigation">
      {/* <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"/>
        <script src="./HeaderScript.js" />
      </Helmet> */}
      <div className="nav-container">
        <div className="brand">
          <img id="company-logo" src={logo} alt="Company Logo" />
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a  className="link hover-2" href="#!">Home</a>
            </li>
            <li>
              <a  className="link hover-2" href="#!">About Us</a>
            </li>
            <li>
              <a  className="link hover-2" href="#!">Doctors</a>
            </li>
            <li>
              <a  className="link hover-2" href="#!">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>      
    </section>
  );
};  

export default Header;
