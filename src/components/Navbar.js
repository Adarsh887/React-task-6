import React from 'react';

function Navbar() {
  const isSmallScreen = window.innerWidth <= 576;
  return (
    <nav className={`navbar navbar-dark text-center ${isSmallScreen ? '' : 'sticky-top'}`}>
      <div className="container-fluid flex-column flex-sm-row fw-bolder">
        <a className="navbar-brand fs-2 px-5" href="#top">
          My Portfolio
        </a>
        <ul className="navbar-nav flex-sm-row text-center">
          <li className="nav-item px-4 fs-5">
            <a className="nav-link text-light" href="#about-section">
              About
            </a>
          </li>
          <li className="nav-item px-4 fs-5">
            <a className="nav-link text-light" href="#skills-section">
              Skills
            </a>
          </li>
          <li className="nav-item px-4 fs-5">
            <a className="nav-link text-light" href="#education-section">
              Education
            </a>
          </li>
          <li className="nav-item px-4 fs-5">
            <a className="nav-link text-light" href="#contact-section">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;