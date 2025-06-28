import React from "react";


function HireMe() {
  return (
    <section className="hireme-section">
      <div className="hireme-title-wrapper">
        <span className="hireme-title">Hire Me</span>
      </div>
      <div className="hireme-contacts">
        <div className="hireme-contact">
          <span className="hireme-label">WhatsApp</span>
          <span className="hireme-value">7225970922</span>
        </div>
        <div className="hireme-contact">
          <span className="hireme-label">Email</span>
          <span className="hireme-value">amankumarsingh31032002@gmail.com</span>
        </div>
        <div className="hireme-contact">
          <span className="hireme-label">GitHub</span>
          <a
            href="https://github.com/AmanKumarSingh3132"
            target="_blank"
            rel="noopener noreferrer"
            className="hireme-link"
          >

            /AmanKumarSingh3132
          </a>
        </div>
        <div className="hireme-contact">
          <span className="hireme-label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/aman-kumar-singh-770914243/"
            target="_blank"
            rel="noopener noreferrer"
            className="hireme-link"
          >

            /aman-kumar-singh-770914243
          </a>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
