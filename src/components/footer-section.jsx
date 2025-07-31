import React from 'react'
import logo from "../images/logo.jpg";
import "./footer-section.css";

export default function footerSection() {
  return (
    <div> <div className="footer-content">
              <div className="footer-col footer-row"  >
              <div className="nav-logo" onClick={() => handleNavigate("home")}>
                   <img
              src={logo}
              alt="Godman Earl Mission Logo"
              style={{
                height: 185,
                width: "auto",
                cursor: "pointer",
              }}
            />
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
     <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/campaigns">Campaigns</a>
    <a href="/blog">Blog</a>
    <a href="/sign-up">Sign-up</a>
    </div>
              </div>
              <div className="footer-col">
                <div className="footer-title">FOLLOW US</div>
                <div className="footer-social">
                  <button className="social-button" aria-label="Instagram">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        fillRule="evenodd"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="social-button" aria-label="WhatsApp">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        fillRule="evenodd"
                        fill="currentColor"
                      />
                      <path
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                 
                  <button className="social-button" aria-label="TikTok">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M12.67 2.001h3.07c.13 1.13.52 2.19 1.14 3.13.62.94 1.48 1.73 2.48 2.19.86.41 1.81.62 2.76.65v3.09c-.97.04-1.94-.07-2.87-.33v6.44c0 2.06-.83 3.92-2.18 5.27-1.35 1.35-3.21 2.18-5.27 2.18-2.06 0-3.92-.83-5.27-2.18C3.83 20.43 3 18.57 3 16.51c0-2.06.83-3.92 2.18-5.27 1.35-1.35 3.21-2.18 5.27-2.18.13 0 .26 0 .39.01v3.13c-.13-.01-.26-.01-.39-.01-1.18 0-2.25.48-3.03 1.26-.78.78-1.26 1.85-1.26 3.03 0 1.18.48 2.25 1.26 3.03.78.78 1.85 1.26 3.03 1.26 1.18 0 2.25-.48 3.03-1.26.78-.78 1.26-1.85 1.26-3.03v-9.53c.93.26 1.9.37 2.87.33V8.13c-.95-.03-1.9-.24-2.76-.65-1-.46-1.86-1.25-2.48-2.19-.62-.94-1.01-2-1.14-3.13z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div></div>
  )
}
