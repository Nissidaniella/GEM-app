import React, { useState } from "react";
import "../PageStyles.css";
import campaignScholarship from "../images/campaign-scholarship.jpg";
import campaignWomen from "../images/campaign-women.jpg";
import campaignMother from "../images/campaign-mother.jpg";
import campaignHealthScreen from "../images/campaign-health-screen.jpg";
import campaignSchool from "../images/campaign-school.png";
import campaignPrayer from "../images/campaign-prayer.png";
import campaignVolunteer from "../images/campaign-volunteer.png";
import campaignDonate from "../images/campaign-donate.png";

const campaignData = [
  {
    title: "Bright Futures Scholarship Drive",
    summary:
      "Raise funds to provide full scholarships for underprivileged students.",
    img: campaignScholarship,
    whyJoin:
      "Your donation can transform a child’s future. Volunteer as a mentor, pray for these youths, or donate to sponsor a life‑changing opportunity.",
  },
  {
    title: "Women’s Wellness Workshop",
    summary:
      "Free health screenings and workshops focused on women’s health, hygiene, and nutrition.",
    img: campaignWomen,
    whyJoin:
      "Join as a health professional, volunteer to assist, or support through donations and prayers for women’s well‑being.",
  },
  {
    title: "Mother & Baby Care Camp",
    summary:
      "Organize prenatal checkups, nutritional counseling, and spiritual support for pregnant women.",
    img: campaignMother,
    whyJoin:
      "Expectant mothers benefit greatly from your hands‑on help, prayers, or gifts for baby kits.",
  },
  {
    title: "Free Health Screen & Pray Day",
    summary:
      "A community event with free health screenings (BP, glucose, vision), gospel sharing, and prayer sessions.",
    img: campaignHealthScreen,
    whyJoin:
      "Blend holistic care—medical, emotional, and spiritual. Be a volunteer, support financially, or pray for attendees.",
  },
  {
    title: "Back-to-School Blessings",
    summary:
      "Distribute school kits (books, uniforms), hold prayer sessions, and tutor volunteer-led classes.",
    img: campaignSchool,
    whyJoin:
      "Provide foundational education, mentor students, or donate kits—prayers included.",
  },
  {
    title: "Global Gospel Prayer Camps",
    summary:
      "Multi-site prayer gatherings with teaching sessions, worship, and community outreach.",
    img: campaignPrayer,
    whyJoin:
      "Strengthen faith, volunteer onsite, donate for logistics, or uplift spiritually via remote prayer.",
  },
  {
    title: "Health Heroes Volunteering",
    summary:
      "Mobilize volunteers to visit rural areas offering health education, malaria screening, and basic treatments.",
    img: campaignVolunteer,
    whyJoin:
      "Directly impact underserved communities—use your time, skills, or resources—and pray for healing and wisdom.",
  },
  {
    title: "Give & Grow Donation Drive",
    summary:
      "Collect essential items (clothing, hygiene kits, educational supplies) and distribute with gospel messaging.",
    img: campaignDonate,
    whyJoin:
      "Donate goods, help sort and distribute, or pray over each donation to bless recipients.",
  },
];

const CAMPAIGNS_PER_PAGE = 4;

const Campaigns = () => {
  const [page, setPage] = useState(1);
  const [modalIdx, setModalIdx] = useState(null);
  const totalPages = Math.ceil(campaignData.length / CAMPAIGNS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const startIdx = (page - 1) * CAMPAIGNS_PER_PAGE;
  const endIdx = startIdx + CAMPAIGNS_PER_PAGE;
  const campaignsToShow = campaignData.slice(startIdx, endIdx);

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Our Campaigns</h1>
        <p className="page-description">
          Browse our active campaigns and find a cause you'd like to support.
        </p>

        <div className="campaign-grid">
          {campaignsToShow.map((c, idx) => (
            <div className="campaign-card" key={c.title + idx}>
              <div
                className="campaign-img"
                style={{ height: "220px", marginBottom: "0" }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="campaign-details">
                <h3>{c.title}</h3>
                <p className="campaign-summary">{c.summary}</p>
                <button
                  className="view-campaign-btn"
                  onClick={() => setModalIdx(startIdx + idx)}
                  style={{ marginTop: "10px", outline: "none" }}
                >
                  View Campaign
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            style={{ outline: "none" }}
          >
            Back
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page-btn${page === i + 1 ? " active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
              style={{ outline: "none" }}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="page-btn"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            style={{ outline: "none" }}
          >
            Next →
          </button>
        </div>
      </div>
      {modalIdx !== null && (
        <div className="campaign-modal-overlay">
          <div className="campaign-modal">
            <img
              src={campaignData[modalIdx].img}
              alt={campaignData[modalIdx].title}
              className="campaign-modal-img"
              style={
                campaignData[modalIdx].img === campaignMother
                  ? { transform: "translateY(-18px)" }
                  : {}
              }
            />
            <h2 className="campaign-modal-title">
              {campaignData[modalIdx].title}
            </h2>
            <div className="campaign-modal-why">
              {campaignData[modalIdx].whyJoin}
            </div>
            <div className="campaign-modal-actions">
              <button
                className="campaign-modal-action"
                style={{ outline: "none" }}
              >
                Donate
              </button>
              <button
                className="campaign-modal-action"
                style={{ outline: "none" }}
              >
                Volunteer
              </button>
              <button
                className="campaign-modal-action"
                style={{ outline: "none" }}
              >
                Pray
              </button>
            </div>
            <button
              className="campaign-modal-back"
              onClick={() => setModalIdx(null)}
              style={{ outline: "none" }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
