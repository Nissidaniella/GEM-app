import React, { useState } from "react";
import "../donation.css";

const Donation = ({ handleNavigate }) => {
  const [activeForm, setActiveForm] = useState("default"); // 'default', 'monthly', 'mobile', 'onetime'
  return (
    <div
      className="donation-page"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      {/* Hero Banner and Form Side-by-Side */}
      <div
        className="donation-hero-bg responsive-hero-bg"
        style={{
          backgroundImage: 'url("/src/images/donate-page1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "850px",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: window.innerWidth <= 962 ? "column" : "row",
          padding: window.innerWidth <= 962 ? "20px" : "0",
        }}
      >
        {/* Bubble animation overlay */}
        <div
          className="bubbles"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "850px",
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div className="bubble" key={i}></div>
          ))}
        </div>

        <div
          className="donation-bg-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 220, 50, 0.28)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="donation-form-container responsive-form-container"
          style={{
            background: "rgba(105, 114, 167, 0.76)",
            borderRadius: "18px",
            boxShadow: "0 4px 32px #0002",
            marginLeft: window.innerWidth <= 962 ? "0" : "6vw",
            marginTop: window.innerWidth <= 962 ? "20px" : "48px",
            marginBottom: "48px",
            maxWidth: window.innerWidth <= 962 ? "100%" : "400px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "auto",
            height: "auto",
            order: window.innerWidth <= 962 ? 2 : 1,
          }}
        >
          {/* Default state - no form visible */}
          {activeForm === "default" && (
            <div
              className="default-form-content"
              style={{ padding: "40px", textAlign: "center", color: "#fff" }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  fontSize: window.innerWidth <= 962 ? "1.4rem" : "1.8rem",
                }}
              >
                Choose Your Donation Method
              </h2>
              <p
                style={{
                  fontSize: window.innerWidth <= 962 ? "1rem" : "1.1rem",
                  lineHeight: "1.5",
                  marginBottom: "0",
                }}
              >
                Select one of the donation options to get started with your
                contribution.
              </p>
            </div>
          )}

          {/* Monthly Donation Form */}
          {activeForm === "monthly" && (
            <form
              className="donation-form-monthly"
              onSubmit={(e) => {
                e.preventDefault(); /* handle monthly payment logic here */
              }}
            >
              <h2
                className="form-section-title"
                style={{ margin: "0 0 12px 0" }}
              >
                Monthly Donation - Your Information
              </h2>
              <div className="form-row" style={{ marginBottom: "10px" }}>
                <div className="form-group">
                  <label htmlFor="monthlyFirstName">FIRST NAME</label>
                  <input
                    type="text"
                    id="monthlyFirstName"
                    name="firstName"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyLastName">LAST NAME</label>
                  <input
                    type="text"
                    id="monthlyLastName"
                    name="lastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="monthlyEmail">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="monthlyEmail"
                  name="email"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="monthlyAmount">MONTHLY AMOUNT</label>
                <select
                  id="monthlyAmount"
                  name="amount"
                  defaultValue="10"
                  className="form-select"
                >
                  <option value="5">¢5 per month</option>
                  <option value="10">¢10 per month</option>
                  <option value="25">¢25 per month</option>
                  <option value="50">¢50 per month</option>
                  <option value="100">¢100 per month</option>
                </select>
              </div>

              <h2
                className="form-section-title"
                style={{ margin: "18px 0 12px 0" }}
              >
                Payment Information
              </h2>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="monthlyCardNumber">CREDIT CARD NUMBER</label>
                <input
                  type="text"
                  id="monthlyCardNumber"
                  name="cardNumber"
                  placeholder="Credit card number"
                />
              </div>
              <div className="form-row" style={{ marginBottom: "10px" }}>
                <div className="form-group">
                  <label htmlFor="monthlyExpMonth">EXPIRATION</label>
                  <div className="expiration-fields">
                    <input
                      type="text"
                      id="monthlyExpMonth"
                      name="expMonth"
                      placeholder="MM"
                      maxLength={2}
                    />
                    <input
                      type="text"
                      id="monthlyExpYear"
                      name="expYear"
                      placeholder="YYYY"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyCvc">SECURITY CODE</label>
                  <input
                    type="text"
                    id="monthlyCvc"
                    name="cvc"
                    placeholder="CVC"
                    maxLength={4}
                  />
                </div>
              </div>

              <p className="donation-message" style={{ margin: "10px 0" }}>
                You will be charged monthly until you choose to cancel.
              </p>

              <div
                className="form-actions"
                style={{ marginTop: "8px", textAlign: "center" }}
              >
                <button type="submit" className="process-payment-btn">
                  Start Monthly Donation
                </button>
              </div>
            </form>
          )}

          {/* Mobile Money Form */}
          {activeForm === "mobile" && (
            <form
              className="donation-form-mobile"
              onSubmit={(e) => {
                e.preventDefault(); /* handle mobile money payment logic here */
              }}
            >
              <h2
                className="form-section-title"
                style={{ margin: "0 0 12px 0" }}
              >
                Mobile Money Payment
              </h2>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="mobileFirstName">FIRST NAME</label>
                <input
                  type="text"
                  id="mobileFirstName"
                  name="firstName"
                  placeholder="First name"
                />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="mobileLastName">LAST NAME</label>
                <input
                  type="text"
                  id="mobileLastName"
                  name="lastName"
                  placeholder="Last name"
                />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="mobileProvider">MOBILE PROVIDER</label>
                <select
                  id="mobileProvider"
                  name="provider"
                  defaultValue=""
                  className="form-select"
                >
                  <option value="">Select Provider</option>
                  <option value="mtn">MTN Mobile Money</option>
                  <option value="airtel">Airtel Money</option>
                  <option value="vodafone">Vodafone Cash</option>
                  <option value="tigo">Tigo Cash</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="mobileNumber">MOBILE NUMBER</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="mobileAmount">DONATION AMOUNT</label>
                <select
                  id="mobileAmount"
                  name="amount"
                  defaultValue="10"
                  className="form-select"
                >
                  <option value="5">¢5</option>
                  <option value="10">¢10</option>
                  <option value="25">¢25</option>
                  <option value="50">¢50</option>
                  <option value="100">¢100</option>
                </select>
              </div>

              <p className="donation-message" style={{ margin: "10px 0" }}>
                You will receive an SMS prompt to confirm the payment on your
                mobile device.
              </p>

              <div
                className="form-actions"
                style={{ marginTop: "8px", textAlign: "center" }}
              >
                <button type="submit" className="process-payment-btn">
                  Send Mobile Payment
                </button>
              </div>
            </form>
          )}

          {/* One Time Donation Form */}
          {activeForm === "onetime" && (
            <form
              className="donation-form"
              onSubmit={(e) => {
                e.preventDefault(); /* handle one-time payment logic here */
              }}
            >
              <h2
                className="form-section-title"
                style={{ margin: "0 0 12px 0" }}
              >
                One-Time Donation - Your Information
              </h2>
              <div className="form-row" style={{ marginBottom: "10px" }}>
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
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="streetAddress">STREET ADDRESS</label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="Street address"
                />
              </div>
              <div className="form-row" style={{ marginBottom: "10px" }}>
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
                  <select
                    id="state"
                    name="state"
                    defaultValue="AL"
                    className="form-select"
                  >
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    {/* Add all states as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP CODE</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Zip code"
                  />
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

              <h2
                className="form-section-title"
                style={{ margin: "18px 0 12px 0" }}
              >
                Payment Information
              </h2>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="cardNumber">CREDIT CARD NUMBER</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Credit card number"
                />
              </div>
              <div className="form-row" style={{ marginBottom: "10px" }}>
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

              <p className="donation-message" style={{ margin: "10px 0" }}>
                Click the button to confirm your one-time donation.
              </p>

              <div
                className="form-actions"
                style={{ marginTop: "8px", textAlign: "center" }}
              >
                <button type="submit" className="process-payment-btn">
                  Process Payment
                </button>
              </div>
            </form>
          )}
        </div>
        <div
          className="donation-hero-title"
          style={{
            position: window.innerWidth <= 962 ? "relative" : "absolute",
            top: window.innerWidth <= 962 ? "0" : "59px",
            right: window.innerWidth <= 962 ? "0" : "6vw",
            zIndex: 3,
            color: "#fff",
            fontWeight: 700,
            fontSize: window.innerWidth <= 962 ? "2rem" : "2.8rem",
            textAlign: window.innerWidth <= 962 ? "center" : "right",
            lineHeight: 1,
            fontFamily: "'Permanent Marker', cursive",
            letterSpacing: "2px",
            textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            textTransform: "uppercase",
            whiteSpace: "pre-line",
            marginBottom: window.innerWidth <= 962 ? "20px" : "0",
            order: window.innerWidth <= 962 ? 1 : "initial",
          }}
        >
          BE A GEM IN
          <br />
          SOMEONE'S LIFE
          <br />
          TODAY
        </div>

        <div
          className="donation-links"
          style={{
            position: window.innerWidth <= 962 ? "relative" : "absolute",
            top: window.innerWidth <= 962 ? "0" : "280px",
            right: window.innerWidth <= 962 ? "0" : "6vw",
            zIndex: 3,
            display: "flex",
            flexDirection: window.innerWidth <= 962 ? "row" : "column",
            flexWrap: window.innerWidth <= 962 ? "wrap" : "nowrap",
            gap: "15px",
            textAlign: window.innerWidth <= 962 ? "center" : "right",
            justifyContent: window.innerWidth <= 962 ? "center" : "flex-end",
            marginBottom: window.innerWidth <= 962 ? "20px" : "0",
            order: window.innerWidth <= 962 ? 3 : "initial",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveForm("monthly");
            }}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: window.innerWidth <= 962 ? "1rem" : "1.2rem",
              fontWeight: 600,
              padding: window.innerWidth <= 962 ? "8px 15px" : "10px 20px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              minWidth: window.innerWidth <= 962 ? "140px" : "auto",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.target.style.transform = "translateX(-5px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
              e.target.style.transform = "translateX(0)";
            }}
          >
            Monthly Donation
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveForm("mobile");
            }}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: window.innerWidth <= 962 ? "1rem" : "1.2rem",
              fontWeight: 600,
              padding: window.innerWidth <= 962 ? "8px 15px" : "10px 20px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              minWidth: window.innerWidth <= 962 ? "140px" : "auto",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.target.style.transform = "translateX(-5px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
              e.target.style.transform = "translateX(0)";
            }}
          >
            Pay with Mobile Money
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveForm("onetime");
            }}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: window.innerWidth <= 962 ? "1rem" : "1.2rem",
              fontWeight: 600,
              padding: window.innerWidth <= 962 ? "8px 15px" : "10px 20px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              minWidth: window.innerWidth <= 962 ? "140px" : "auto",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.target.style.transform = "translateX(-5px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
              e.target.style.transform = "translateX(0)";
            }}
          >
            One Time Donation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donation;
