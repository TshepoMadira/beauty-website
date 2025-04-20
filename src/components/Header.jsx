import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaChevronDown, FaBars } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="company-banner">
        <h1 className="company-title">BNG Beauty Co.</h1>
        {/* Mobile menu button */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <FaBars className="icon" />
        </button>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={closeAllDropdowns}>Home</Link>
          </li>
          
          <li className="nav-item dropdown">
            <div 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('weaves')}
            >
              <Link to="/weaves" className="nav-link">Weaves</Link>
              <FaChevronDown className={`dropdown-icon ${openDropdown === 'weaves' ? 'open' : ''}`} />
            </div>
            {openDropdown === 'weaves' && (
              <div className="dropdown-menu">
                <Link to="/weaves/brazilian" onClick={closeAllDropdowns}>Brazilian</Link>
                <Link to="/weaves/peruvian" onClick={closeAllDropdowns}>Peruvian</Link>
                <Link to="/weaves/indian" onClick={closeAllDropdowns}>Indian</Link>
                <Link to="/weaves/frontals" onClick={closeAllDropdowns}>Frontals</Link>
              </div>
            )}
          </li>
          
          <li className="nav-item dropdown">
            <div 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('nails')}
            >
              <Link to="/nails" className="nav-link">Nails</Link>
              <FaChevronDown className={`dropdown-icon ${openDropdown === 'nails' ? 'open' : ''}`} />
            </div>
            {openDropdown === 'nails' && (
              <div className="dropdown-menu">
                <Link to="/nails/gel-overlay" onClick={closeAllDropdowns}>Gel Overlay</Link>
                <Link to="/nails/acrylic" onClick={closeAllDropdowns}>Acrylic</Link>
                <Link to="/nails/buff-shine" onClick={closeAllDropdowns}>Buff & Shine</Link>
                <Link to="/nails/polygel" onClick={closeAllDropdowns}>Polygel</Link>
              </div>
            )}
          </li>
          
          <li className="nav-item">
            <Link to="/hair-products" onClick={closeAllDropdowns}>Hair Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" onClick={closeAllDropdowns}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeAllDropdowns}>Contact</Link>
          </li>
          
          {/* User and Cart Icons */}
          <li className="nav-item icon-group">
            <Link to="/auth" className="icon-link" title="Account">
              <FaUser className="icon" />
            </Link>
            <Link to="/cart" className="icon-link" title="Cart">
              <span className="cart-icon-wrapper">
                <FaShoppingCart className="icon" />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;