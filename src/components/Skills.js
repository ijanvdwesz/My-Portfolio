import React from "react";
import "../styles/Skills.css";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", logo: "/images/logos/javascript-logo.png" },
      { name: "React", logo: "/images/logos/react-logo.png" },
      { name: "Tailwind CSS", logo: "/images/logos/tailwind-logo.png" },
      { name: "Sass", logo: "/images/logos/sass-logo.png" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", logo: "/images/logos/node-logo.svg" },
      { name: "Express.js", logo: "/images/logos/express-logo.png" },
      { name: "Laravel", logo: "/images/logos/laravel-logo.png" },
      { name: "REST APIs", logo: "/images/logos/api-logo.png" },
      { name: "JWT Auth", logo: "/images/logos/jwt-logo.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", logo: "/images/logos/mongodb-logo.png" },
      { name: "MySQL", logo: "/images/logos/mysql-logo.png" },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git", logo: "/images/logos/git-logo(1).png" },
      { name: "GitHub", logo: "/images/logos/github-logo.png" },
      { name: "Docker", logo: "/images/logos/docker-logo.avif" },
      { name: "Vercel", logo: "/images/logos/vercel-logo.png" },
      { name: "Google Cloud", logo: "/images/logos/google-cloud-logo.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills & Technologies</h2>

      {skillCategories.map((group, index) => (
        <div key={index} className="skills-category">
          <h3>{group.category}</h3>

          <div className="skills-grid">
            {group.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <img src={skill.logo} alt={skill.name} loading="lazy" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="education-section">
        <h3>Education</h3>
        <p>
          <strong>Immersive Full-Stack Development</strong>
          <br />
          HyperionDev
          <br />
          Completed: 2025
        </p>
      </div>
    </section>
  );
};

export default Skills;