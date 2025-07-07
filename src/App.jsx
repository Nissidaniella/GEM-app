import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Donation from "./pages/Donation";
import SignUp from "./pages/Sign-up";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home handleNavigate={navigateTo} />;
      case "campaigns":
        return <Campaigns />;
      case "about":
        return <About />;
      case "blog":
        return <Blog />;
      case "contact":
        return <SignUp />;
      case "donation":
        return <Donation />;
      default:
        return <Home handleNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <HeroSection onNavigate={navigateTo} currentPage={currentPage} />
      <div className="page-content-container">{renderPage()}</div>
      {showScrollTop && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
