import React from 'react';
import './Footer.css';
import footer from '../assets/footer.png';
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={footer} alt="footer" className="footer-image" />
        <div className="footer-overlay">
          <div className="footer-content">
            <div className='contact-section'>
              <h2 className='contact-text'>Contact</h2>
              <div className='email'>
                Email: info@artistichumans
              </div>
              <div className='phone'>
                Phone: +91 12345 67890
              </div>
            </div>
            <div className='follow-section'>
              <h2 className='follow-text'>Follow Us</h2>
              <div className='social'>
                <a href="#" aria-label="Visit our Facebook page">
                  <FaFacebook className="social-icon"/>
                </a>
                <a href="#" aria-label="Visit our Instagram page">
                  <FaInstagram className="social-icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="copyright">
              <p>© 2024 The Constitution Play. All rights reserved.</p>
            </div>
            <div className="credits">
              Web crafted by Red Fibre
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;