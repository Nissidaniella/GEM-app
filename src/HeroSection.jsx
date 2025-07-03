import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import "./hero-override.css";
import NavBar from "./components/nav-bar";
import kidsImg from "./images/kids.jpg";

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
      style={
        currentPage === "home"
          ? { background: `url(${kidsImg}) center/cover no-repeat` }
          : {}
      }
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
            <h2 className="hero-subtitle">. . . . . .</h2>
            <h1 className="hero-title loading07">
              <span data-text="G">G</span>
              <span data-text="E">E</span>
              <span data-text="M">M</span>
              <span data-text="I">I</span>
              <span data-text="N">N</span>
              <span data-text="I">I</span>
            </h1>{" "}
            <p className="hero-desc">
              Be the <span className="italic">GEM</span> that changes a life.
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
