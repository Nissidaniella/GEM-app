import React from "react";
import logo from "../images/logo.jpg";

const NavBar = ({
  activePage,
  handleNavigate,
  mobileMenuOpen,
  toggleMobileMenu,
}) => (
  <nav className="navbar">
    <div className="nav-left">
      <div className="nav-logo" onClick={() => handleNavigate("home")}>
       <img
  src={logo}
  alt="Godman Earl Mission Logo"
  style={{
    height: 48,
    width: "auto",
    cursor: "pointer",
  }}
/>
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
          className={`nav-item ${activePage === "campaigns" ? "active" : ""}`}
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
          className={`nav-item ${activePage === "contact" ? "active" : ""}`}
          onClick={() => handleNavigate("contact")}
        >
          SIGN-UP
        </li>
      </ul>
    </div>
    <div className="nav-right">
      <button className="donate-btn" onClick={() => handleNavigate("donation")}>
        DONATE NOW
      </button>
    </div>
  </nav>
);

export default NavBar;
