import React from "react";
import "../PageStyles.css";

const SignUp = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title"> Sign up</h1>
        <p className="page-description">
          Fill out one or more forms to officially become a GEM — as a
          Volunteer, Prayer Partner, or Organizational Team member.
        </p>

        <div className="join-section">
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
          </form>

          <form className="form prayer-partner-form prayer-partner-form-overlap">
            <h2 className="form-title">Prayer Partner</h2>

            <label>
              Name
              <input type="text" name="pp_name" required />
            </label>
            <label>
              Email
              <input type="email" name="pp_email" required />
            </label>

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
              <div className="checkbox-row">
                <div className="checkbox-item checkbox-education">
                  <label>
                    <input type="checkbox" name="pp_areas_education" />
                    <span>Education</span>
                  </label>
                </div>
                <div className="checkbox-item checkbox-health">
                  <label>
                    <input type="checkbox" name="pp_areas_health" />
                    <span>Health</span>
                  </label>
                </div>
                <div className="checkbox-item checkbox-missions">
                  <label>
                    <input type="checkbox" name="pp_areas_missions" />
                    <span>Missions</span>
                  </label>
                </div>
                <div className="checkbox-item checkbox-gemini">
                  <label>
                    <input type="checkbox" name="pp_areas_gemini" />
                    <span>Gemini as a whole</span>
                  </label>
                </div>
              </div>
            </label>
            <button type="submit">Submit Application</button>
          </form>

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
              Leadership/organizational experience?
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
                <select name="org_role" className="top">
                  <option value="project management">Project Management</option>
                  <option value="communications">Communications</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="logistics">Logistics</option>
                  <option value="operations">Operations</option>
                  <option value="IT">IT</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Education Level
                <select name="org_education" className="top">
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
          </form>
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
              <h3>Can I apply for more than one position?</h3>
              <p>Yes, you can indicate interest in more than one role.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need specific qualifications?</h3>
              <p>
                Organizational Team members may need leadership experience.
                Volunteers and Prayer Partners only need dedication and
                commitment.
              </p>
            </div>
            <div className="faq-item">
              <h3>What is expected from me?</h3>
              <p>
                Organizational Team members guide and plan, Volunteers support
                activities, and Prayer Partners commit to praying for GEMINI’s
                mission.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I know if my application was received?</h3>
              <p>
                After submitting the form, you’ll receive a confirmation email
                with details on the next steps.
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
{
  /* Join Section */
}
