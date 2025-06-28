import React from "react";

const educationData = [
  {
    degree: "B. Tech. in Computer Science and Engineering",
    years: "2021 – 2025",
    institution: "Vellore Institute of Technology, Chennai"
  },
  {
    degree: "12th Grade",
    years: "2019 – 2020",
    institution: "Krishna Public School, Nehru Nagar, Bhilai"
  },
  {
    degree: "10th Grade",
    years: "2017 – 2018",
    institution: "Krishna Public School, Nehru Nagar, Bhilai"
  }
];

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, idx) => (
          <div className="education-card" key={idx}>
            <h3 className="education-degree">{edu.degree}</h3>
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-years">{edu.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
