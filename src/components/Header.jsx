import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  // Handle scroll behavior (don't update if mobile menu is open)
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Prevent scroll from affecting header style if menu is open
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Toggle a dropdown (only on click)
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  // When clicking a link in mobile mode, close menu and dropdowns
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    closeAllDropdowns();
  };

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      closeAllDropdowns(); // Clear any open dropdowns when opening mobile menu
    }
  };

  // Click outside handler (for overlay click to close mobile menu)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && e.target.classList.contains('overlay')) {
        setMobileMenuOpen(false);
        closeAllDropdowns();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="company-banner">
        <Link to="/" className="company-title-link" onClick={handleMobileLinkClick}>
          <h1 className="company-title">BNG Beauty Co.</h1>
        </Link>
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </button>
      </div>

      {/* Overlay that appears when mobile menu is open */}
      {mobileMenuOpen && <div className="overlay"></div>}

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={handleMobileLinkClick}>Home</Link>
          </li>

          {/* Weaves Dropdown */}
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

          {/* Nails Dropdown */}
          <li className="nav-item dropdown">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown('nails')}
            >
              <span className="nav-link">Nails</span>
              <FaChevronDown className="dropdown-icon" />
            </div>
            <div className={`dropdown-menu ${openDropdown === 'nails' ? 'open' : ''}`}>
              <div className="dropdown-item" onClick={() => setShowComingSoonModal(true)}>
                Gel Overlay <span className="coming-soon-badge">Coming Soon</span>
              </div>
              <div className="dropdown-item" onClick={() => setShowComingSoonModal(true)}>
                Acrylic <span className="coming-soon-badge">Coming Soon</span>
              </div>
              <div className="dropdown-item" onClick={() => setShowComingSoonModal(true)}>
                Buff & Shine <span className="coming-soon-badge">Coming Soon</span>
              </div>
              <div className="dropdown-item" onClick={() => setShowComingSoonModal(true)}>
                Polygel <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </div>
          </li>

          {/* Other Links */}
          <li className="nav-item">
            <Link to="/hair-products" onClick={handleMobileLinkClick}>Hair Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" onClick={handleMobileLinkClick}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={handleMobileLinkClick}>Contact</Link>
          </li>

          {/* Account & Cart Icons */}
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

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="coming-soon-modal">
          <div className="modal-content">
            <h3>Exciting Things Are Coming!</h3>
            <p>Our nail services are currently in development. We're working hard to bring you the highest quality options and appreciate your patience.</p>
            <p>Stay tuned for updates on our new nail services launching soon!</p>
            <button 
              onClick={() => setShowComingSoonModal(false)}
              className="modal-close-btn"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;