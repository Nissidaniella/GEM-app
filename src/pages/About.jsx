import "../PageStyles.css";
import { MissionIcon, VisionIcon, ValuesIcon } from "../components/ValuesIcons";
import patch from "../images/patch.PNG";
import patch2 from "../images/patch2.PNG";

const About = ({ handleNavigate }) => {
  return (
    <div className="page-container about-page">
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


         <section className="gem-section">
          <div className="gem-inner">
            <div
              className="gem-cards about-page"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <div className="gem-card">
                <div className="card1">
<div className="gem-card-icon gem-card-icon-yellow">
                  <MissionIcon />
                </div>
                <div className="gem-card-title">Our Mission</div>

                </div>
                
                <div className="gem-card-desc">
                  Empower individuals and communities to reach their full
                  potential through education, support, and opportunity.  Empower individuals and communities to reach their full
                  potential through education, support, and opportunity.
                  <br></br>
                  <br></br>
                   Empower individuals and communities to reach their full
                  potential through education, support, and opportunity.
                   Empower individuals and communities to reach their full
                  potential through education, support, and opportunity.

                  
                </div>
              </div>
              <div className="gem-card gem-card-active">
                <div className="card1">

                     <div className="gem-card-icon gem-card-icon-yellow">
                  <VisionIcon />
                </div>
                <div className="gem-card-title">Our Vision</div>
                </div>
            
                <div className="gem-card-desc">
                  A world where everyone has access to the resources, care, and
                  encouragement they need to thrive.
                </div>
              </div>


              <div className="gem-card">

                <div className="card1">
<div className="gem-card-icon gem-card-icon-yellow">
                  <ValuesIcon />
                </div>
                <div className="gem-card-title">Our Values</div>

                </div>
                




                <div className="gem-card-desc">
                  Compassion, integrity, and unity guide every action as we work
                  together for lasting impact.
                </div>
              </div>
            </div>
          </div>
        </section>

       

      

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


    
          <div className="about-content earl">
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

 <br></br>
        <br></br>
        <br></br>

           <div className="contact-section">
      {/* Left Side - Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
        
        <form>
          <label>
            <input type="text" name="name" required  placeholder="Name"/>
          </label>

          <label>
            <input type="email" name="email" required  placeholder="Email"/>
          </label>
          <label>
            <input name="message" rows="4" required placeholder="Message"></input>
          </label>
          <button type="submit">SEND</button>
        </form>
      </div>

      {/* Right Side - Info */}
      <div className="contact-info">
        <h3>Info</h3>
        <ul>
          <li>
            <span className="icon">✉️</span> info@getintouch.we
          </li>
          <li>
            <span className="icon">📞</span> +24 56 89 146
          </li>
          <li>
            <span className="icon">🏢</span> 14 Greenroad St.
          </li>
          <li>
            <span className="icon">⏰</span> 09:00 - 18:00
          </li>
        </ul>
      </div>
    </div>

         <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>How quickly will I receive a response?</h3>
              <p>
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I visit your office in person?</h3>
              <p>
                Yes, we welcome visitors during our office hours. We recommend
                scheduling an appointment in advance.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I report a technical issue?</h3>
              <p>
                Please email support@fundor.org with details of the issue,
                including screenshots if possible.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer partnership opportunities?</h3>
              <p>
                Yes! Please reach out to partnerships@fundor.org to discuss
                potential collaboration.
              </p>
            </div>
          </div>
        </div>
       

      </div>
    </div>
  );
};

export default About;
