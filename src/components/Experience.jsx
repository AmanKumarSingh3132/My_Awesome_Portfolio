import React from "react";
import Internship from "../../Asset/Mr. Aman kumar Singh Internship Certificate-signed[26788].pdf"

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-content">
            <h3 className="experience-role">Data Science Intern</h3>
            <p className="experience-company">@ Globussoft</p>
            <p className="experience-duration">May 2025 – June 2025 (1 month)</p>
            <p className="experience-description">
              Built several machine learning models as part of my internship at Globussoft. Successfully completed all assigned tasks and delivered solutions within the given deadlines.
            </p>
            <a
              href="../../Asset/Mr. Aman kumar Singh Internship Certificate-signed[26788].pdf"
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{ marginTop: "1.2rem" }}
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
