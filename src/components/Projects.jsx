// src/components/Projects.jsx
import React from "react";
import project1Img from "../../Asset/project1.png";
import project2Img from "../../Asset/project2.png";

const projects = [
  {
    title: "Simon Game",
    description: "A game where you have to remember the pattern appearing on the screen and then select the showed pattern.",
    image: project1Img,
    link: "https://github.com/AmanKumarSingh3132/Simon_Game",
    game: "https://amankumarsingh3132.github.io/Simon_Game/"
  },
  {
    title: "Drum Kit",
    description: "Here you can play the drum kit either by clicking on them or by pressing keys on keyboard.",
    image: project2Img,
    link: "https://github.com/AmanKumarSingh3132/Drum_Kit",
    "Drum-Kit": "https://amankumarsingh3132.github.io/Drum_Kit/"
  },
  // Add more projects here
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-actions">
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                >
                View Code
                </a>
                {"game" in project && (
                <a
                    href={project.game}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                >
                    Play Game
                </a>
                )}
                {"Drum-Kit" in project && (
                <a
                    href={project["Drum-Kit"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                >
                    Try Drum Kit
                </a>
                )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
