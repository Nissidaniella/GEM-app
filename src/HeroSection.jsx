import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import "./hero-override.css";

const HeroSection = ({ onNavigate, currentPage }) => {
  const [activePage, setActivePage] = useState(currentPage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    setActivePage(currentPage);
    setMobileMenuOpen(false); // Close mobile menu on page change
  }, [currentPage]);

  const handleNavigate = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`hero-container ${currentPage === "home" ? "is-home" : ""} ${mobileMenuOpen ? "mobile-menu-active" : ""}`}>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo" onClick={() => handleNavigate("home")}>
            fundor
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
            <li
              className={`nav-item ${activePage === "home" ? "active" : ""}`}
              onClick={() => handleNavigate("home")}
            >
              HOME
            </li>
            <li
              className={`nav-item ${
                activePage === "campaigns" ? "active" : ""
              }`}
              onClick={() => handleNavigate("campaigns")}
            >
              CAMPAIGNS
            </li>
            <li
              className={`nav-item ${activePage === "about" ? "active" : ""}`}
              onClick={() => handleNavigate("about")}
            >
              ABOUT
            </li>
            <li
              className={`nav-item ${activePage === "blog" ? "active" : ""}`}
              onClick={() => handleNavigate("blog")}
            >
              BLOG
            </li>
            <li
              className={`nav-item ${activePage === "pages" ? "active" : ""}`}
              onClick={() => handleNavigate("pages")}
            >
              PAGES
            </li>
            <li
              className={`nav-item ${activePage === "contact" ? "active" : ""}`}
              onClick={() => handleNavigate("contact")}
            >
              CONTACT
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="social-icon">
            <i className="fa fa-instagram"></i>
          </div>
          <div className="phone-number">+(84) 1800 333 555</div>
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>{" "}
          <div className="user-icon">
            <i className="fa fa-user"></i>
          </div>
          <button
            className="donate-btn"
            onClick={() => handleNavigate("campaigns")}
          >
            DONATE NOW
          </button>
        </div>
      </nav>

      {/* Hero Content - Conditionally render based on currentPage */}
      {currentPage === "home" && (
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className="hero-subtitle">HELPING PEOPLE</h2>
            <h1 className="hero-title">together</h1>{" "}
            <p className="hero-desc">
              Raise money for charity and personal causes.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => handleNavigate("about")}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
