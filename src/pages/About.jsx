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
          
          </div>
        </div>


       
<br></br> <br></br>
       
   
    <section className="vision-section">
      <div className="vision-inner">

       
        <div className="heading-wrap">
          <div className="edit-handles">
            <span className="h top-left" />
            <span className="h top-center" />
            <span className="h top-right" />
            <span className="h mid-left" />
            <span className="h mid-right" />
            <span className="h bottom-left" />
            <span className="h bottom-center" />
            <span className="h bottom-right" />
          </div>

          <h1 className="vision-heading">
            Our <span className="yellow">V</span>ision
            <img src="patch2.png" alt="" className="underline-img" />
          </h1>
        </div>

        <p className="vision-body">
          Our vision is to become a top design agency, empowering brands across
          all industries by crafting unique, impactful visuals that build
          lasting connection and meaning.
        </p>
        </div>
       
          <div className="mission-inner">

  <div className="heading-wrap">
          <div className="edit-handles">
            <span className="h top-left" />
            <span className="h top-center" />
            <span className="h top-right" />
            <span className="h mid-left" />
            <span className="h mid-right" />
            <span className="h bottom-left" />
            <span className="h bottom-center" />
            <span className="h bottom-right" />
          </div>
            
            <h1 className="mission-heading">
              Our <span className="yellow">M</span>ission
              <img src="patch2.PNG" alt="" className="underline-img" />
            </h1>

          </div>
            <p className="mission-body">
              Our mission is to deliver innovative, creative, and effective
              design solutions that elevate brands, inspire audiences, and
              create lasting impressions.
            </p>
          </div>

          <div className="values-inner">

  <div className="heading-wrap">
          <div className="edit-handles">
            <span className="h top-left" />
            <span className="h top-center" />
            <span className="h top-right" />
            <span className="h mid-left" />
            <span className="h mid-right" />
            <span className="h bottom-left" />
            <span className="h bottom-center" />
            <span className="h bottom-right" />
          </div>
            
            <h1 className="values-heading">
              Our <span className="yellow">V</span>alues
              <img src="patch2.PNG" alt="" className="underline-img" />
            </h1>

          </div>
            <p className="values-body">
              Our mission is to deliver innovative, creative, and effective
              design solutions that elevate brands, inspire audiences, and
              create lasting impressions.
            </p>
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

      {/* Right Side - faq */}
      <div className="contact-faq">
        <h3>Frequently Asked 
        Questions
        </h3>
        <ul>
          <li>
            <span className="question"> <h5> • How quickly will I receive a response?</h5></span> 
         
            <span className="answer">
               <p>
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </span>
          </li>
         <li>
            <span className="question"> <h5> • How quickly will I receive a response?</h5></span> 
         
            <span className="answer">
               <p>
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </span>
          </li>
          <li>
            <span className="question"> <h5> • How quickly will I receive a response?</h5></span> 
         
            <span className="answer">
               <p>
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </span>
          </li>
        
        </ul>
      </div>
    </div>

     
       

      </div>
    </div>
  );
};

export default About;
