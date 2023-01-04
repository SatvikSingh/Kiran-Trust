import React from 'react'
import './Footer.css'
import logo from "../../../assets/company-logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div>
      <footer className="footer-sec">
    <div className="main">
      
      
      <div className="logo row">
        <div className="footer-header">
        <img id="company-logo" src={logo} alt="Company Logo" />
        </div>
        <div className="logo-des">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          
          <a href="#" className="btn-know">Know More</a>
        </div>
        
        
      </div>
      
      
      
      <div className="office row">
        <div className="footer-header">
          <h3>Office</h3>
        </div>
        <div className="office-des">
          <p>here are <br /> many variations of passages<br />of Lorem Ipsum<br />available</p>
          
         <a href="#">kirantrustindia@gmail.com</a>
          
          <p class = "num">+91-9999999999</p>
        </div>
      </div>
      
      
      <div className="link row">
        <div className="footer-header">
          <h3>Links</h3>
        </div>
        
        <div className="link-des">
          <a href="#" className="footer-links">Home</a>
          <a href="#" className="footer-links">About</a>
          <a href="#" className="footer-links">Services</a>
          <a href="#" className="footer-links">Galary</a>
          <a href="#" className="footer-links">Contact</a>
        </div>
        
      </div>
      
      
      <div className="newsletter row">
        <div className="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div className="newsletter-des">
          <div className="subcribe"><EmailIcon className="mail-icon"/>
            <input type="mail" placeholder = "Enter Email ID" required />
            <i className="sub-icon ri-arrow-right-line"></i>
          </div>
          <div className="icons">
            <a href="#"><FacebookIcon className="footer-icon"/></a>
            <a href="#"><InstagramIcon className="footer-icon"/></a>
            <a href="#"><TwitterIcon className="footer-icon"/></a>
            
          </div>
        </div>
      </div>
      
      
    </div>
    <div className="copyright">
    <hr></hr>
    <p>© Copyright 2022 Kiran Trust.</p>
    </div>
  </footer>
    </div>
  );
};

export default Footer