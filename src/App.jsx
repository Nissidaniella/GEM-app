import React, { useState } from "react";
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

  // Function to handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
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
        return <Home />;
    }
  };

  return (
    <div className="app">
      <HeroSection onNavigate={navigateTo} currentPage={currentPage} />
      <div className="page-content-container">
        {" "}
        {/* Added for clarity and potential styling */}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
