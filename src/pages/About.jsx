import React from "react";
import "../PageStyles.css";

const About = () => {
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
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo placeholder-img"></div>
              <h3>Jane Doe</h3>
              <p className="member-title">CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-photo placeholder-img"></div>
              <h3>John Smith</h3>
              <p className="member-title">COO</p>
            </div>
            <div className="team-member">
              <div className="member-photo placeholder-img"></div>
              <h3>Emily Johnson</h3>
              <p className="member-title">Head of Partnerships</p>
            </div>
            <div className="team-member">
              <div className="member-photo placeholder-img"></div>
              <h3>Michael Chen</h3>
              <p className="member-title">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
