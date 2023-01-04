import React, { Fragment } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import Contact from "../../components/ContactSection/ContactSection";
import DoctorSection from "../../components/DoctorSection/DoctorSection";
import HomeSection from "../../components/HomeSection/HomeSection";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";
import {  useSelector } from "react-redux";

const Home = () => {
  const {  loading, userInfo, isAuth } = useSelector(
    (state) => state.user
  );
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Home Page`} />
          <Header />
          <HomeSection />
          <AboutSection />
          <DoctorSection />
          <Contact />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
