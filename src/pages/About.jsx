import "../PageStyles.css";
import { MissionIcon, VisionIcon, ValuesIcon } from "../components/ValuesIcons";
import patch from "../images/patch.PNG";
import patch2 from "../images/patch2.PNG";

const About = ({ handleNavigate }) => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">About GEMINI</h1>
        <p className="page-description">
          Our mission is to create a platform where people can easily raise
          funds for causes that matter most to them.
        </p>

        <div className="content-section">
          <div className="team-mosaic-grid mosaic-5col">
            <div className="mosaic-tile tile-bg tile-gemini">
              <div className="gemini-grid">
                <span className="gemini-letter">GE</span>
                <span className="gemini-letter">MI</span>
                <span className="gemini-letter">NI</span>
              </div>
            </div>
            <div className="mosaic-tile tile-img tile-person1">
              <div
                className="mosaic-photo"
                style={{ backgroundImage: "url('/src/images/school.jpg')" }}
              ></div>
            </div>
            <div className="mosaic-tile tile-bg tile-quote1">
              <span className="tile-text">
                A global mission for positive change.
              </span>
            </div>
            <div className="mosaic-tile tile-img tile-person2">
              <div
                className="mosaic-photo"
                style={{ backgroundImage: "url('/src/images/help.jpg')" }}
              ></div>
            </div>
            <div className="mosaic-tile tile-bg tile-welcome">
              <span className="tile-text">
                Change starts with one and grows worldwide.
              </span>
            </div>
            <div className="mosaic-tile tile-img tile-person3">
              <div
                className="mosaic-photo"
                style={{ backgroundImage: "url('/src/images/grouphands.jpg')" }}
              ></div>
            </div>
            <div className="mosaic-tile tile-bg tile-refugio">
              <span className="tile-text">
                Its vision is access to resources for all.
              </span>
            </div>
            <div className="mosaic-tile tile-img tile-person4">
              <div
                className="mosaic-photo"
                style={{ backgroundImage: "url('/src/images/fist.jpg')" }}
              ></div>
            </div>
            <div className="mosaic-tile tile-bg tile-extra1">
              <span className="tile-text">
                It builds impact through excellence and integrity.
              </span>
            </div>
            <div className="mosaic-tile tile-img tile-person5">
              <div
                className="mosaic-photo"
                style={{ backgroundImage: "url('/src/images/heart.jpg')" }}
              ></div>
            </div>
            <div className="mosaic-tile tile-img tile-person6">
              <div
                className="mosaic-photo"
                style={{ backgroundImage: "url('/src/images/kids.jpg')" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2
            style={{
              borderBottom: "none",
              marginBottom: "-99px",
              left: "0px",
              textAlign: "center",
              fontSize: "3.5rem",
            }}
          >
            Our Founder
          </h2>
          <img
            src={patch2}
            alt="Patch 2"
            style={{
              width: "160px",
              marginBottom: "-18px",
              marginLeft: "500px",
            }}
          />
          <div className="about-content">
            <div
              className="about-image placeholder-img"
              style={{ border: "2px solid #ffcc00", padding: "40px" }}
            ></div>
            <div className="about-text" style={{ position: "relative" }}>
              <h1 style={{ marginTop: "15px",}}>Rev. Dr. Earl Godman</h1>{" "}
              <br></br>
              <br></br>
              <img
                src={patch}
                alt="Patch Overlay 1"
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "30%",
                  width: "90px",
                  opacity: 1.18,
                  pointerEvents: "none",
                  zIndex: 1,
                  transform: "rotate(-12deg)",
                }}
              />
              <img
                src={patch}
                alt="Patch Overlay 2"
                style={{
                  position: "absolute",
                  right: "10%",
                  bottom: "10%",
                  width: "90px",
                  opacity: 2.18,
                  pointerEvents: "none",
                  zIndex: 1,
                  transform: "rotate(12deg)",
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <p>
                  Fundor was established in 2020 with a vision to democratize
                  fundraising and make it accessible to everyone. Our founders
                  recognized the need for a platform that could connect donors
                  directly with causes they care about, removing barriers and
                  reducing overhead costs.
                </p>
                <p>
                  Since our founding, we've helped raise over $10 million for
                  various causes around the world, from educational initiatives
                  and healthcare access to disaster relief and environmental
                  conservation.
                </p>
                <p>
                  We're proud of the impact we've made so far, but our journey
                  is just beginning. We continue to innovate and improve our
                  platform to better serve both campaign creators and donors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="gem-section ">
          <div className="gem-inner">
            <div
              className="gem-cards about-page"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <div className="gem-card">
                <div className="gem-card-icon gem-card-icon-yellow">
                  <MissionIcon />
                </div>
                <div className="gem-card-title">Our Mission</div>
                <div className="gem-card-desc">
                  Empower individuals and communities to reach their full
                  potential through education, support, and opportunity.
                </div>
              </div>
              <div className="gem-card gem-card-active">
                <div className="gem-card-icon gem-card-icon-yellow">
                  <VisionIcon />
                </div>
                <div className="gem-card-title">Our Vision</div>
                <div className="gem-card-desc">
                  A world where everyone has access to the resources, care, and
                  encouragement they need to thrive.
                </div>
              </div>
              <div className="gem-card">
                <div className="gem-card-icon gem-card-icon-yellow">
                  <ValuesIcon />
                </div>
                <div className="gem-card-title">Our Values</div>
                <div className="gem-card-desc">
                  Compassion, integrity, and unity guide every action as we work
                  together for lasting impact.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
