import React from "react";
import "./DoctorSection.css";
import Doctorcard from "../DoctorCard/Doctorcard";
const DoctorSection = () => {
  return (
    <div>
      <section className="section4">
        <div className="title_header">
          <h1>Our Doctors</h1>
        </div>     
        <div className="row">
          <div className="column">
            <Doctorcard/>
          </div>
          <div className="column">
            <Doctorcard/>
          </div>
          <div className="column">
            <Doctorcard/>
          </div>
          <div className="column">
            <Doctorcard/>
          </div>
          <div className="column">
            <Doctorcard/>
          </div>
          <div className="column">
            <Doctorcard/>
          </div>
          <div className="column">
            <Doctorcard/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorSection;
