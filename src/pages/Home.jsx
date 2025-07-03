import React from "react";
import "../PageStyles.css";
import "./home.css";

const Home = () => {
  return (
    <div className="page-container">
      <section className="home-yellow-section">
        <h2 className="home-yellow-section-title">
          Godman Earl Mission And International Initiatives <br></br>(GEMINI)
        </h2>
        <div className="home-cards-row">
          {/* Donation Card */}
          <div className="home-card">
            <div className="home-card-icon">
              <i
                className="fas fa-hand-holding-heart"
                aria-label="Donation"
              ></i>
            </div>
            <div className="home-card-title">Competence</div>
            <div className="home-card-subtitle">
              Gemini relies on skilled teams and partners to deliver impactful
              education, health, and empowerment programs.
            </div>
          </div>
          {/* Fundrising Card */}
          <div className="home-card">
            <div className="home-card-icon">
              <i className="fas fa-coins" aria-label="Fundrising"></i>
            </div>
            <div className="home-card-title">Influence</div>
            <div className="home-card-subtitle">
              Gemini works with communities and partners to expand its reach and
              inspire global change.
            </div>
          </div>
          {/* Volunteer Card */}
          <div className="home-card">
            <div className="home-card-icon">
              <i className="fas fa-hands-helping" aria-label="Volunteer"></i>
            </div>
            <div className="home-card-title">Excellence</div>
            <div className="home-card-subtitle">
              Gemini upholds high standards to ensure quality, accountability,
              and lasting transformation.
            </div>
          </div>
        </div>
      </section>

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
