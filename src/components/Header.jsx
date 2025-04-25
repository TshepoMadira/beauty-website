import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
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
    setMobileMenuOpen(false);
  };

  const handleMobileLinkClick = () => {
    closeAllDropdowns();
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 100);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="company-banner">
        <Link to="/" className="company-title-link">
          <h1 className="company-title">BNG Beauty Co.</h1>
        </Link>
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </button>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={handleMobileLinkClick}>Home</Link>
          </li>

          <li className="nav-item dropdown">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown('weaves')}
            >
              <span className="nav-link">Weaves</span>
              <FaChevronDown className="dropdown-icon" />
            </div>
            <div className={`dropdown-menu ${openDropdown === 'weaves' ? 'open' : ''}`}>
              <Link to="/weaves/brazilian" onClick={handleMobileLinkClick}>Brazilian</Link>
              <Link to="/weaves/peruvian" onClick={handleMobileLinkClick}>Peruvian</Link>
              <Link to="/weaves/indian" onClick={handleMobileLinkClick}>Indian</Link>
              <Link to="/weaves/frontals" onClick={handleMobileLinkClick}>Frontals</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown('nails')}
            >
              <span className="nav-link">Nails</span>
              <FaChevronDown className="dropdown-icon" />
            </div>
            <div className={`dropdown-menu ${openDropdown === 'nails' ? 'open' : ''}`}>
              <Link to="/nails/gel-overlay" onClick={handleMobileLinkClick}>Gel Overlay</Link>
              <Link to="/nails/acrylic" onClick={handleMobileLinkClick}>Acrylic</Link>
              <Link to="/nails/buff-shine" onClick={handleMobileLinkClick}>Buff & Shine</Link>
              <Link to="/nails/polygel" onClick={handleMobileLinkClick}>Polygel</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/hair-products" onClick={handleMobileLinkClick}>Hair Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" onClick={handleMobileLinkClick}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={handleMobileLinkClick}>Contact</Link>
          </li>

          <li className="nav-item icon-group">
            <Link to="/auth" className="icon-link" title="Account" onClick={handleMobileLinkClick}>
              <FaUser className="icon" />
            </Link>
            <Link to="/cart" className="icon-link" title="Cart" onClick={handleMobileLinkClick}>
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