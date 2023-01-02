import React from 'react'
import AboutSection from '../../components/AboutSection/AboutSection'
import Contact from '../../components/ContactSection/ContactSection'
import DoctorSection from '../../components/DoctorSection/DoctorSection'
import HomeSection from '../../components/HomeSection/HomeSection'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection/>
      <DoctorSection/> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home