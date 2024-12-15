import React, { useState } from 'react';
import './Navbar.css'; // Add corresponding CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          MyWebsite
        </a>
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className="bar">Home</span>
          <span className="bar">Contact</span>
          <span className="bar">Team</span>
        </button>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#services" className="navbar-link dropdown-toggle">
              Services
            </a>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li>
                <a href="#service1" className="dropdown-item">
                  Service 1
                </a>
              </li>
              <li>
                <a href="#service2" className="dropdown-item">
                  Service 2
                </a>
              </li>
              <li>
                <a href="#service3" className="dropdown-item">
                  Service 3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
