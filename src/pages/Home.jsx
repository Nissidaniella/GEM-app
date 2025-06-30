import React from "react";
import "../PageStyles.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Home Page</h1>
        <p className="page-description">
          Welcome to Fundor! We help connect people with causes that matter.
        </p>
        <div className="content-section">
          <h2>Featured Campaigns</h2>
          <div className="feature-cards">
            <div className="card">
              <div className="card-img placeholder-img"></div>
              <h3>Education for All</h3>
              <p>
                Help provide education resources to underserved communities.
              </p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "75%" }}></div>
              </div>
              <div className="card-footer">
                <span>$15,000 raised</span>
                <span>Goal: $20,000</span>
              </div>
            </div>
            <div className="card">
              <div className="card-img placeholder-img"></div>
              <h3>Clean Water Initiative</h3>
              <p>Support access to clean drinking water in rural areas.</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "45%" }}></div>
              </div>
              <div className="card-footer">
                <span>$9,000 raised</span>
                <span>Goal: $20,000</span>
              </div>
            </div>
            <div className="card">
              <div className="card-img placeholder-img"></div>
              <h3>Healthcare Access</h3>
              <p>Help provide medical care to those who need it most.</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
              </div>
              <div className="card-footer">
                <span>$12,000 raised</span>
                <span>Goal: $20,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
