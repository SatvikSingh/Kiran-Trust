import React from "react";
import './HomeSection.css'

const HomeSection = () => {
  return (
    <div>
      <div className="container">
        <section>
          <h1><span className="mental">Mental</span> <span className="health">Health</span></h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <center><a href="#" className="btn1">
            Learn More
          </a>
          </center>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
