// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure you create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>BeautyGlow</h2>
          <p>Enhance your natural beauty with our carefully curated products.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-support">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/track-order">Track Order</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe</h4>
          <p>Join our newsletter for beauty tips and exclusive offers!</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social & Legal */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TT</a>
        </div>

        <div className="legal-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <div className="payments">
          <span>💳 Visa</span>
          <span>💳 MasterCard</span>
          <span>💳 PayPal</span>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} BeautyGlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
