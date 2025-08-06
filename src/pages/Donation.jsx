import "../donation.css";



const Donation = ({ handleNavigate }) => {
  return (
    <div
      className="donation-page"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      {/* Hero Banner and Form Side-by-Side */}
      <div
        className="donation-hero-bg"
        style={{
          backgroundImage: 'url("/src/images/donate-page1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "850px",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
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
          className="donation-form-container"
          style={{
            background: "rgba(105, 114, 167, 0.76)",
            borderRadius: "18px",
            boxShadow: "0 4px 32px #0002",
            marginLeft: "6vw",
            marginTop: "48px",
            marginBottom: "48px",
            maxWidth: "400px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "auto",
            height: "auto",
          }}
        >
          <form
            className="donation-form"
            onSubmit={(e) => {
              e.preventDefault(); /* handle payment logic here */
            }}
          >
            <h2 className="form-section-title" style={{ margin: "0 0 12px 0" }}>
              Your Information
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
              Click the button to confirm your donation of $10, recurring
              monthly.
            </p>

            <div className="form-actions" style={{ marginTop: "8px" }}>
              <a href="#" className="go-back-link">
                Go back
              </a>
              <button type="submit" className="process-payment-btn">
                Process Payment
              </button>
            </div>
          </form>
        </div>
        <div
          className="donation-hero-title"
          style={{
            position: "absolute",
            top: "59px",
            right: "6vw",
            zIndex: 3,
            color: "#fff",
            fontWeight: 700,
            fontSize: "2.8rem",
            textAlign: "right",
            lineHeight: 1,
            fontFamily: "'Permanent Marker', cursive",
            letterSpacing: "2px",
            textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            textTransform: "uppercase",
            whiteSpace: "pre-line",
          }}
        >
          BE A GEM IN
          <br />
          SOMEONE'S LIFE
          <br />
          TODAY
        </div>
      </div>

      
    </div>
  );
};

export default Donation;
