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
          <div className="form-wrapper">
            <form className="form volunteer-form">
              <h2 className="form-title">Volunteer</h2>
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="vol_name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="vol_email" required />
                </label>
              </div>
              <label>
                Phone Number
                <input type="tel" name="vol_phone" required />
              </label>
              <label>
                Address
                <input type="text" name="vol_address" />
              </label>
              <label>
                Role/Area of interest
                <select name="vol_position">
                  <option value="education">Education</option>
                  <option value="health">Health</option>
                  <option value="outreach">Outreach</option>
                  <option value="admin">Admin</option>
                  <option value="logistics">Logistics</option>
                  <option value="media">Media</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Do you have previous volunteer experience?
                <select name="vol_experience">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label>
                Please describe any relevant skills or certifications
                <input type="text" name="vol_skills" />
              </label>
              <button type="submit">Submit Application</button>
              <div className="end-note">
                👉{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join our Volunteer WhatsApp group to connect with other
                  volunteers.
                </a>
              </div>
            </form>
          </div>
          <div className="form-wrapper">
            <form className="form prayer-partner-form">
              <h2 className="form-title">Prayer Partner</h2>
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="pp_name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="pp_email" required />
                </label>
              </div>
              <label>
                Phone Number
                <input type="tel" name="pp_phone" required />
              </label>
              <label>
                Address
                <input type="text" name="pp_address" />
              </label>
              <label>
                Specific areas you feel led to pray for:
                <div>
                  <label>
                    <input type="checkbox" name="pp_areas_education" />{" "}
                    Education
                  </label>
                  <label>
                    <input type="checkbox" name="pp_areas_health" /> Health
                  </label>
                  <label>
                    <input type="checkbox" name="pp_areas_missions" /> Missions
                  </label>
                  <label>
                    <input type="checkbox" name="pp_areas_gemini" /> GEMINI as a
                    whole
                  </label>
                </div>
              </label>
              <button type="submit">Submit Application</button>
              <div className="end-note">
                👉{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join our Prayer Partners WhatsApp group to pray and share with
                  others.
                </a>
              </div>
            </form>
          </div>
          <div className="form-wrapper">
            <form className="form org-team-form">
              <h2 className="form-title">Organizational Team</h2>
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="org_name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="org_email" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Phone Number
                  <input type="tel" name="org_phone" required />
                </label>
                <label>
                  Address
                  <input type="text" name="org_address" required />
                </label>
              </div>

              <label>
                Relevant leadership/organizational experience
                <input name="org_experience" type="text"></input>
              </label>
              <label>
                Why do you want to join the GEMINI team?
                <input name="org_interest" type="text"></input>
              </label>
              <label>
                Current Employer/Workplace
                <input type="text" name="org_employer" />
              </label>

              <div className="form-row ">
                <label>
                  Role/Area of interest
                  <select name="org_role">
                    <option value="project management">
                      Project Management
                    </option>
                    <option value="communications">Communications</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="logistics">Logistics</option>
                    <option value="operations">Operations</option>
                    <option value="IT">IT</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label>
                  
                  Highest Level of Education
                  <select name="org_education">
                    <option value="high school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor’s">Bachelor’s</option>
                    <option value="master’s">Master’s</option>
                    <option value="doctorate">Doctorate</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <button type="submit">Submit Application</button>
              <div className="end-note">
                👉{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join our Organizational Team WhatsApp group to stay connected.
                </a>
              </div>
            </form>
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

{
  /* Join Section */
}
