import React from "react";
import "../PageStyles.css";

const Pages = () => {
  // Sample pages for the site
  const sitePages = [
    {
      id: 1,
      title: "How It Works",
      description:
        "Learn how our fundraising platform operates and how to get started.",
      icon: "info-circle",
    },
    {
      id: 2,
      title: "Success Stories",
      description:
        "Read about successful campaigns and the impact they've made.",
      icon: "star",
    },
    {
      id: 3,
      title: "Donation FAQ",
      description: "Common questions about donating through our platform.",
      icon: "question-circle",
    },
    {
      id: 4,
      title: "Campaign Creator Guidelines",
      description: "Rules and best practices for creating campaigns.",
      icon: "clipboard-list",
    },
    {
      id: 5,
      title: "Terms of Service",
      description: "The legal terms governing the use of our platform.",
      icon: "file-contract",
    },
    {
      id: 6,
      title: "Privacy Policy",
      description: "How we handle and protect your data.",
      icon: "shield-alt",
    },
    {
      id: 7,
      title: "Partner Organizations",
      description: "Organizations we work with to maximize impact.",
      icon: "handshake",
    },
    {
      id: 8,
      title: "Careers",
      description: "Join our team and help make a difference.",
      icon: "briefcase",
    },
    {
      id: 9,
      title: "Press & Media",
      description: "Media resources and press releases.",
      icon: "newspaper",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Pages</h1>
        <p className="page-description">
          Explore all available resources and information pages.
        </p>

        <div className="pages-grid">
          {sitePages.map((page) => (
            <div className="page-card" key={page.id}>
              <div className="page-icon">
                <i className={`fas fa-${page.icon}`}></i>
              </div>
              <div className="page-info">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <a href="#" className="view-page-link">
                  View Page <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="help-section">
          <div className="help-content">
            <h2>Need Help Finding Something?</h2>
            <p>
              Our support team is here to assist you in navigating our website
              and finding the information you need.
            </p>
            <button className="contact-support-btn">
              <i className="fas fa-headset"></i> Contact Support
            </button>
          </div>
          <div className="search-section">
            <h3>Search Our Site</h3>
            <div className="site-search">
              <input
                type="text"
                placeholder="Enter keywords..."
                className="site-search-input"
              />
              <button className="site-search-btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
