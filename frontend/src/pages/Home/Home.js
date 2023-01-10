import React, { Fragment } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import Contact from "../../components/ContactSection/ContactSection";
import DoctorSection from "../../components/DoctorSection/DoctorSection";
import HomeSection from "../../components/HomeSection/HomeSection";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";
import {  useSelector } from "react-redux";

const Home = () => {
  const {  loading } = useSelector(
    (state) => state.user
  );
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Home Page`} />
          <HomeSection />
          <AboutSection />
          <DoctorSection />
          <Contact />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
