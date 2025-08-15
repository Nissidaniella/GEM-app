import "../PageStyles.css";

const About = ({ handleNavigate }) => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">About Fundor</h1>
        <p className="page-description">
          Our mission is to create a platform where people can easily raise
          funds for causes that matter most to them.
        </p>

        <div className="content-section">
          <h2>Our Story</h2>
          <div className="about-content">
            <div className="about-image placeholder-img"></div>
            <div className="about-text">
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
                We're proud of the impact we've made so far, but our journey is
                just beginning. We continue to innovate and improve our platform
                to better serve both campaign creators and donors.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon placeholder-icon"></div>
              <h3>Transparency</h3>
              <p>
                We believe in complete transparency in all fundraising
                activities.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon placeholder-icon"></div>
              <h3>Accessibility</h3>
              <p>
                Making fundraising accessible to everyone regardless of
                background.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon placeholder-icon"></div>
              <h3>Impact</h3>
              <p>
                Focusing on creating real-world positive change through our
                platform.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon placeholder-icon"></div>
              <h3>Community</h3>
              <p>Building a supportive community of donors and fundraisers.</p>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default About;
