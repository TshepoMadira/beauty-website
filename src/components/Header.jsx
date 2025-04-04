// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="company-banner">
        <h1 className="company-title">BNG Beauty Co.</h1>
      </div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          
          <li className="nav-item dropdown">
            <Link to="/weaves" className="nav-link">Weaves</Link>
            <div className="dropdown-menu">
              <Link to="/weaves/brazilian">Brazilian</Link>
              <Link to="/weaves/peruvian">Peruvian</Link>
              <Link to="/weaves/indian">Indian</Link>
              <Link to="/weaves/frontals">Frontals</Link>
            </div>
          </li>
          
          <li className="nav-item dropdown">
            <Link to="/nails" className="nav-link">Nails</Link>
            <div className="dropdown-menu">
              <Link to="/nails/gel-overlay">Gel Overlay</Link>
              <Link to="/nails/acrylic">Acrylic</Link>
              <Link to="/nails/buff-shine">Buff & Shine</Link>
              <Link to="/nails/polygel">Polygel</Link>
            </div>
          </li>
          
          <li className="nav-item"><Link to="/hair-products">Hair Products</Link></li>
          <li className="nav-item"><Link to="/services">Services</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
          <li className="nav-item cart-icon">
            <Link to="/cart" className="cart-link">
              🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;