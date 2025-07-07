import React from "react";
import "../PageStyles.css";
import "./home.css";
import patch from "../images/patch.PNG";
import patch2 from "../images/patch2.PNG";
import healthImg from "../images/health.jpg";
import bibleImg from "../images/bible.jpg";
import handsupImg from "../images/handsup.jpg";
import class1Img from "../images/class1.jpg";
import praykImg from "../images/prayk.jpg";
import coinsImg from "../images/coins.jpg";

const Home = (props) => {
  // Accept handleNavigate from props or fallback to window.location.hash
  const handleNavigate =
    props.handleNavigate ||
    ((page) => {
      window.location.hash = page;
    });

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
      {/* <div className="page-content">
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
      </div> */}

      {/* Duplicated impact section below page-content */}
      <section className="impact-section">
        <div className="impact-inner">
          <div className="impact-images" style={{ position: "relative" }}>
            {/* Patch behind one image */}
            <img
              className="impact-img-patch impact-patch-yellow"
              src={patch2}
              alt="patch"
              style={{
                left: "1020px",
                top: "205px",
                width: "140px",
                height: "60px",
                transform: "rotate(-8deg)",
                zIndex: 0,
                position: "absolute",
              }}
            />
            {/* Images */}
            <div
              className="impact-img impact-img1"
              style={{ backgroundImage: `url(${healthImg})` }}
            ></div>
            <div
              className="impact-img impact-img2"
              style={{ backgroundImage: `url(${class1Img})` }}
            ></div>
            <div
              className="impact-img impact-img3"
              style={{ backgroundImage: `url(${praykImg})` }}
            ></div>
            <div
              className="impact-img impact-img4"
              style={{ backgroundImage: `url(${coinsImg})` }}
            ></div>
            <div
              className="impact-img impact-img5"
              style={{ backgroundImage: `url(${bibleImg})` }}
            ></div>
          </div>
          <div className="impact-text" style={{ position: "relative" }}>
            
            <img
              className="impact-img-patch impact-patch-about"
              src={patch2}
              alt="patch"
              style={{
                left: "10px",
                top: "365px",
                width: "120px",
                height: "50px",
                transform: "rotate(-5deg)",
                zIndex: 0,
                position: "absolute",
              }}
            />
            
            <img
              className="impact-img-patch impact-patch-yourhelp"
              src={patch2}
              alt="patch"
              style={{
                left: "200px",
                top: "24px",
                width: "200px",
                height: "90px",
                transform: "rotate(0deg)",
                zIndex: 0,
                position: "absolute",
                opacity: 0.7,
              }}
            />
            <img
              className="impact-img-patch impact-patch-efforts"
              src={patch}
              alt="patch"
              style={{
                left: "6px",
                top: "120px",
                width: "120px",
                height: "40px",
                transform: "rotate(-12deg)",
                zIndex: 0,
                position: "absolute",
              }}
            />
            <h2>
              Can One Organization
              <br />
              Change the <span className="impact-highlight">World?</span>
            </h2>
            <p>
              Yes — when it moves with purpose, serves with love, and partners
              with others for lasting impact.
              <br />
              <br />
              We are an international non-profit organization committed to
              driving positive change in the areas of education, health, and
              empowerment. We firmly believe that change can start with one, and
              with collaborative effort, can transcend borders and restrictions
              to create a better world for all — in service to God and humanity.
              <br />
              <br />
              <a
                href="#about"
                className="impact-link"
                style={{ position: "relative", zIndex: 1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate("about");
                }}
              >
                More
              </a>
              <button
                onClick={() => handleNavigate("donation")}
                className="impact-btn"
              >
                Donate
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
