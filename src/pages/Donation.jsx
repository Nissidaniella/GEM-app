import React from "react";
import "../donation.css";

const Donation = () => {
  return (
    <div className="donation-page">
      {/* Hero Banner */}
      <div className="donation-hero">
        <div className="donation-hero-overlay"></div>
        <div className="donation-hero-content">
          <div className="donation-hero-title">
            The Green
            <br />
            Trees Initiative
          </div>
          <h1>
            GIVE HOPE
            <br />
            TO THOSE
            <br />
            WHO NEED
            <br />
            IT MOST
          </h1>
        </div>
      </div>
      {/* Form Section */}
      <div className="donation-form-section">
        <div className="donation-form-container">
          <form className="donation-form">
            <h2 className="form-section-title">Your information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="streetAddress">STREET ADDRESS</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street address"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">CITY</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">STATE</label>
                <select id="state" name="state" defaultValue="AL">
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  {/* Add all states as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="zip">ZIP CODE</label>
                <input type="text" id="zip" name="zip" placeholder="Zip code" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
              />
            </div>

            <h2 className="form-section-title">Payment information</h2>
            <div className="form-group">
              <label htmlFor="cardNumber">CREDIT CARD NUMBER</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Credit card number"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expMonth">EXPIRATION</label>
                <div className="expiration-fields">
                  <input
                    type="text"
                    id="expMonth"
                    name="expMonth"
                    placeholder="MM"
                    maxLength={2}
                  />
                  <input
                    type="text"
                    id="expYear"
                    name="expYear"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cvc">SECURITY CODE</label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  placeholder="CVC"
                  maxLength={4}
                />
              </div>
            </div>

            <p className="donation-message">
              Click the button to confirm your donation of $10, recurring
              monthly.
            </p>

            <div className="form-actions">
              <a href="#" className="go-back-link">
                Go back
              </a>
              <button type="submit" className="process-payment-btn">
                Process Payment
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="donation-footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-title">
              The Green
              <br />
              Trees Initiative
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-title">CONTACT US</div>
            <div className="footer-contact">
              123 Anywhere St.
              <br />
              Cityname, NY 11205
              <br />
              (123) 456-7890
              <br />
              contact@npo.org
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-title">LINKS</div>
            <div className="footer-links">
              <a href="#">The issue</a>
              <a href="#">How we help</a>
              <a href="#">Get involved</a>
              <a href="#">Latest news</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-title">FOLLOW US</div>
            <div className="footer-social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-medium"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-hashtag">
          #STOP
          <br />
          CLIMATE
          <br />
          CHANGE
        </div>
      </footer>
    </div>
  );
};

export default Donation;
