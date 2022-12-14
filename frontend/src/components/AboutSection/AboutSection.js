import React from "react";
import "./AboutSection.css";
import MedicationIcon from '@mui/icons-material/Medication';
import HealingIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';

const AboutSection = () => {
  return (
    <div>
      <section class="section2">
        <div class="cards">
          <div class="card">
            <MedicationIcon className = "icon"/>
            <h1>Qualified Doctors</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div class="card">
            <HealingIcon className = "icon"/>
            <h1>Certified Services</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div class="card">
            <PsychologyIcon className = "icon"/>
            <h1>Advanced Equipment</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </div>
      </section>
      <section class="section3">
        <div class="cards">
          <div class="card">
            <section>
              <h1>Laboratory Services</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div class="card">
            <section>
              <h1>General Treatment</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div class="card">
            <section>
              <h1>Orthopedician</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
        </div>
        <div class="content">
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
