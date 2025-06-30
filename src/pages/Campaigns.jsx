import React from "react";
import "../PageStyles.css";

const Campaigns = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Our Campaigns</h1>
        <p className="page-description">
          Browse our active campaigns and find a cause you'd like to support.
        </p>

        <div className="filter-section">
          <select className="filter-dropdown">
            <option>All Categories</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Environment</option>
            <option>Poverty Relief</option>
            <option>Animal Welfare</option>
          </select>

          <select className="filter-dropdown">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Ending Soon</option>
            <option>Most Funded</option>
          </select>
        </div>

        <div className="campaign-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="campaign-card" key={num}>
              <div className="campaign-img placeholder-img"></div>
              <div className="campaign-details">
                <h3>Campaign {num}</h3>
                <p className="campaign-description">
                  This is a sample campaign description for the campaigns page.
                </p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                  ></div>
                </div>
                <div className="campaign-stats">
                  <span>
                    ${Math.floor(Math.random() * 15000) + 5000} raised
                  </span>
                  <span>Goal: $20,000</span>
                </div>
                <button className="view-campaign-btn">View Campaign</button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
