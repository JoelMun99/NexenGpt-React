import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NexenLogo from '../../assets/NexenIcons/Nexenlogo.svg';
import MenuBtn from '../../assets/NexenIcons/Menubtn.svg';
import CloseBtn from '../../assets/NexenIcons/Closebtn.svg';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={NexenLogo} alt="Nexen Logo" />
      </div>
      <nav className="navbar__nav navbar__nav--desktop">
        <a className="navbar__link" href="#home">Home</a>
        <a className="navbar__link" href="#features">Features</a>
        <a className="navbar__link" href="#how-it-works">How it works</a>
        <Link to="/login">
          <button className="navbar__button navbar__button--login">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="navbar__button navbar__button--signup">Sign up</button>
        </Link>
      </nav>

      {/* Menu Button for Smaller Screens */}
      <button
        className="navbar__menu-btn"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <img
          className="navbar__menu-icon"
          src={isMenuOpen ? CloseBtn : MenuBtn}
          alt="Menu Icon"
        />
      </button>

      {/* Mobile Overlay Navigation */}
      {isMenuOpen && (
        <div className={`navbar__overlay ${isMenuOpen ? 'navbar__overlay--open' : ''}`}>
          <button
            className="navbar__close-btn"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <img
              className="navbar__close-icon"
              src={CloseBtn}
              alt="Close Icon"
            />
          </button>
          <div className="navbar__overlay-links">
            <a className="navbar__overlay-link" href="#home">Home</a>
            <a className="navbar__overlay-link" href="#features">Features</a>
            <a className="navbar__overlay-link" href="#how-it-works">How it works</a>
            <Link className="navbar__overlay-link" to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
