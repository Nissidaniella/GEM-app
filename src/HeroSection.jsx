import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import "./hero-override.css";
import NavBar from "./components/nav-bar";

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
    <div
      className={`hero-container ${currentPage === "home" ? "is-home" : ""} ${
        mobileMenuOpen ? "mobile-menu-active" : ""
      }`}
    >
      {/* Top Navigation Bar */}
      <NavBar
        activePage={activePage}
        handleNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

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
