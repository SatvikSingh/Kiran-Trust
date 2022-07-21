import React from "react";
import "./HomeSection.css";
import Header from "../../pages/Layout/Header/Header";
import didi from "../../assets/didi.png";
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="about-content">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  className="aboutimg"
                  src="https://picsum.photos/500/300/?image=10"
                  alt="ea"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  className="aboutimg"
                  src="https://picsum.photos/500/300/?image=10"
                  alt="defr"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSection;
