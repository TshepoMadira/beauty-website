// src/components/Footer.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
     <div className="footer-content">
  <div className="footer-left">
    {/* Google Map Embed */}
    <div className="map-container">
      <iframe
        width="100%"
        height="250"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp ;height=600&amp;hl=en&amp;q=03%20Spoorweg%20Brits+(Paragon%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Location Map"
      >
        <a href="https://www.gps.ie/ ">gps trackers</a>
      </iframe>
    </div>
  </div>

  {/* NEW Customer Service Highlights Section */}
  <div className="footer-center">
    <h3>Customer Service</h3>
    <div className="trust-badges">
      <div><i className="fas fa-shipping-fast"></i> Free Shipping</div>
      <div><i className="fas fa-headset"></i> 24/7 Support</div>
      <div><i className="fas fa-lock"></i> Secure Payments</div>
      <div><i className="fas fa-thumbs-up"></i> Satisfaction Guarantee</div>
    </div>
    
    {/* Live Support Chat */}
    <div className="live-support">
      <a 
        href="https://wa.me/123456789 " 
        target="_blank" 
        rel="noopener noreferrer" 
        className="help-button"
      >
        Need Help? 💬
      </a>
      <p className="working-hours">Available: Mon-Fri 9am–6pm</p>
    </div>
  </div>

  <div className="footer-right">
    <Link to="/aboutus">About Us</Link>
    <Link to="/contactus">Contact Us</Link>
    <Link to="/faqs">FAQs</Link>
    <Link to="/termsandconditions">Terms and Conditions</Link>
  </div>
</div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="social-media-links">
          <a href="https://facebook.com " target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://tiktok.com " target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://x.com " target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com " target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="pp">© 2025 BNGBEAUTYCO International Limited. All rights reserved.</p>
      </div>
      {scrolling && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;