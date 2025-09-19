import React from "react";
import "../PageStyles.css";

const SignUp = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title"> Sign up</h1>
         <p className="page-description">
          Have questions or need assistance? Reach out to our team and we'll be
          happy to help.
        </p>
       
        <div className="join-section">
  <div data-text="Volunteer" style={{ "--r": -15 }} className="glass">
   
  </div>
  <div data-text="Prayer Partner" style={{ "--r": 5 }} className="glass">
  
  </div>
  <div data-text="Organizational Team" style={{ "--r": 25 }} className="glass">
  
  </div>
</div>

        
{/* 
        <div className="map-container">
          <h2>Find Us</h2>
          <div className="map placeholder-map">
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Google Maps Embed Placeholder</p>
            </div>
          </div>
        </div> */}

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

export default SignUp;

{/* Join Section */}

