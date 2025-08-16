import React from "react";
import "../PageStyles.css";
import "./home.css";
import patch from "../images/patch.PNG";
import patch2 from "../images/patch2.PNG";
import healthImg from "../images/health.jpg";
import bibleImg from "../images/bible.jpg";
import class1Img from "../images/class1.jpg";
import praykImg from "../images/prayk.jpg";
import coinsImg from "../images/coins.jpg";
import earlImg from "../images/earl1.jpg";


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
      

      <section className="impact-section">
        <div className="impact-inner">
          <div className="impact-images" style={{ position: "relative" }}>
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

      <section className="gem-section">
        <div className="gem-inner">
          <div className="gem-left">
            <span className="gem-mini-title">Be A GEM</span>
            <div className="gem-title-row">
              <h2 className="gem-title">
                Your Role
                <br />
                Matters.
              </h2>
            </div>
            <p className="gem-desc">
              Support the Gemini mission—volunteer, become a prayer partner, or
              join our organizational team.
            </p>
          </div>
          <div className="gem-cards">
            <div className="gem-card">
              <div className="gem-card-icon gem-card-icon-yellow">
                <i className="fas fa-hands-helping"></i>
              </div>
              <div className="gem-card-title">Volunteer Opportunities</div>
              <div className="gem-card-desc">
                Contribute your time and talents to our outreach and daily
                operations. Roles vary by skillset and availability.
              </div>
              <button
                className="gem-card-btn"
                onClick={() => handleNavigate("contact")}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="gem-card gem-card-active">
              <div className="gem-card-icon gem-card-icon-yellow">
                <i className="fas fa-praying-hands"></i>
              </div>
              <div className="gem-card-title">Prayer Partner</div>
              <div className="gem-card-desc">
                Support the Gemini mission spiritually by praying for our
                programs, people, and global impact.
              </div>
              <button
                className="gem-card-btn"
                onClick={() => handleNavigate("contact")}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="gem-card">
              <div className="gem-card-icon gem-card-icon-yellow">
                <i className="fas fa-users-cog"></i>
              </div>
              <div className="gem-card-title">Organizational Team</div>
              <div className="gem-card-desc">
                Join a dynamic group working behind the scenes to keep Gemini
                thriving—from planning and logistics to execution and
                evaluation.
              </div>
              <button
                className="gem-card-btn"
                onClick={() => handleNavigate("contact")}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

    

     
    </div>
  );
};

export default Home;
