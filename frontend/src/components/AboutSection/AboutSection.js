import React from "react";
import "./AboutSection.css";
import MedicationIcon from '@mui/icons-material/Medication';
import HealingIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';

const AboutSection = () => {
  return (
    <div>
      <section className="section2">
        <div className="cards">
          <div className="card">
            <MedicationIcon className = "icon"/>
            <h1>Qualified Doctors</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div className="card">
            <HealingIcon className = "icon"/>
            <h1>Certified Services</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div className="card">
            <PsychologyIcon className = "icon"/>
            <h1>Advanced Equipment</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="cards">
          <div className="card">
            <section>
              <h1>Laboratory Services</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div className="card">
            <section>
              <h1>General Treatment</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div className="card">
            <section>
              <h1>Orthopedician</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
        </div>
        <div className="content">
          <h1>We are well experienced doctors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
