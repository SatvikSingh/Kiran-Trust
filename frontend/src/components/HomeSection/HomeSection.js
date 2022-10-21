import React from "react";
import "./HomeSection.css";
import Header from "../../pages/Layout/Header/Header";
import didi from "../../assets/didi.png";
// import DoctorSection from "../DoctorSection/DoctorSection";
const HomeSection = () => {
  return (
    <div className="home-section">
      <Header />
      <div id="home-content">
        <img src={didi} alt="didi" />
        <div id="content">
          <div id="heading">
            Mental <span style={{ color: "#C7EEFF" }}>Health</span>
          </div>
          <div id="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu
          </div>
          <div id="button">
            <button type="submit">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="container">
          <div className="product-card">
            <img src="https://assets.codepen.io/2362831/ignitors.png" alt="" />
          </div>

          <div className="product-card">
            <img
              src="https://assets.codepen.io/2362831/capacitors.png"
              alt=""
            />
          </div>

          <div className="product-card">
            <img
              src="https://assets.codepen.io/2362831/UV+Air+Cleaners.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
