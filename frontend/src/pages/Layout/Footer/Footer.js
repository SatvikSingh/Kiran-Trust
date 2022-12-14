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
      <footer class="footer-sec">
    <div class="main">
      
      
      <div class="logo row">
        <div class="footer-header">
        <img id="company-logo" src={logo} alt="Company Logo" />
        </div>
        <div class="logo-des">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          
          <a href="#" class="btn-know">Know More</a>
        </div>
        
        
      </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h3>Office</h3>
        </div>
        <div class="office-des">
          <p>here are <br /> many variations of passages<br />of Lorem Ipsum<br />available</p>
          
         <a href="#">manikmaity.haker2003@gmail.com</a>
          
          <p class = "num">+91-9999999999</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        
        <div class="link-des">
          <a href="#" class="footer-links">Home</a>
          <a href="#" class="footer-links">About</a>
          <a href="#" class="footer-links">Services</a>
          <a href="#" class="footer-links">Galary</a>
          <a href="#" class="footer-links">Contact</a>
        </div>
        
      </div>
      
      
      <div class="newsletter row">
        <div class="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div class="newsletter-des">
          <div class="subcribe"><EmailIcon className="mail-icon"/>
            <input type="mail" placeholder = "Enter Email ID" required />
            <i class="sub-icon ri-arrow-right-line"></i>
          </div>
          <div class="icons">
            <a href="#"><FacebookIcon className="footer-icon"/></a>
            <a href="#"><InstagramIcon className="footer-icon"/></a>
            <a href="#"><TwitterIcon className="footer-icon"/></a>
            
          </div>
        </div>
      </div>
      
      
    </div>
    <div class="copyright">
    <hr></hr>
    <p>© Copyright 2022 Manik Maity.</p>
    </div>
  </footer>
    </div>
  );
};

export default Footer