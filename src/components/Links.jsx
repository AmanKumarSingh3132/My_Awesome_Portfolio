import React from "react";
import githubIcon from "../../Asset/github.png";
import linkedinIcon from "../../Asset/linkedin.png";
import emailIcon from "../../Asset/email.png";
import phoneIcon from "../../Asset/phone.png";
import resumeIcon from "../../Asset/resume.png";

function Links() {
  return (
    <div className="links-section contact-links">
      <a href="https://github.com/AmanKumarSingh3132" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" style={{ width: "40px", height: "40px" }} />
      </a>
      <a href="https://www.linkedin.com/in/aman-kumar-singh-770914243/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" style={{ width: "40px", height: "40px" }} />
      </a>
      <a href="mailto:amankumarsingh31032002@gmail.com">
        <img src={emailIcon} alt="Email" style={{ width: "40px", height: "40px" }} />
      </a>
      <a href="tel:+917225970922">
        <img src={phoneIcon} rel="noopener noreferrer" alt="Phone" style={{ width: "40px", height: "40px" }} />
      </a>
      <a href="../../Asset/Aman_Kumar_Singh_Resume(1).pdf" download>
        <img src={resumeIcon} alt="Resume" style={{ width: "40px", height: "40px" }} />
      </a>
    </div>
  );
}


export default Links;
