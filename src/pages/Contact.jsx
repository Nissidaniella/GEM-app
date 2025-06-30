import React from "react";
import "../PageStyles.css";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Have questions or need assistance? Reach out to our team and we'll be
          happy to help.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 Charity Lane</p>
                <p>Suite 456</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+(84) 1800 333 555</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@fundor.org</p>
                <p>support@fundor.org</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-content">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter subject" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <h2>Find Us</h2>
          <div className="map placeholder-map">
            {/* Map will be displayed here */}
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Google Maps Embed Placeholder</p>
            </div>
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

export default Contact;
