import React from "react";
import htmlIcon from "../../Asset/html.png";
import cssIcon from "../../Asset/css.png";
import bootstrapIcon from "../../Asset/bootstrap.png";
import jsIcon from "../../Asset/javascript.png";
import jqueryIcon from "../../Asset/jquery.png";
import nodejsIcon from "../../Asset/nodejs.png";
import expressjsIcon from "../../Asset/expressjs.png";
import reactjsIcon from "../../Asset/reactjs.png";
import javaIcon from "../../Asset/java.png";
import githubIcon from "../../Asset/github.png";
import sqlIcon from "../../Asset/sql.png";


const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "jQuery", icon: jqueryIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "Express.js", icon: expressjsIcon },
  { name: "React.js", icon: reactjsIcon },
  { name: "Java", icon: javaIcon },
  { name: "Github", icon: githubIcon },
  { name: "SQL", icon: sqlIcon },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
