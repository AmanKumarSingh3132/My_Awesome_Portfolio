import React from "react";

const certifications = [
  "Google Cloud Digital Leader",
  "Google Cloud Computing Foundations",
  "IIT Bombay: Certificate for the Java Training and PHP",
  "IIT Bombay: Certificate for the MySQL Training",
  "NPTEL: Forests and Their Managements"
];

function Certifications() {
  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, idx) => (
          <div className="certification-card" key={idx}>
            <span className="certification-name">{cert}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
