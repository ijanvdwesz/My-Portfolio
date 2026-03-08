import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "ACSystems4u Service & Product Platform",
    description: "Responsive service & product platform built with MERN stack.",
    image: "images/project-acsystems4u.png",
    liveLink: "https://acsystems4u.com/",
    githubLink: "https://github.com/ijanvdwesz/acsystems4u",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Salon Booking App",
    description:
      "Real-time booking system with admin dashboard and automated email notifications.",
    image: "images/project-salon.png",
    liveLink: "https://salon-booking-app-henna.vercel.app/",
    githubLink: "https://github.com/ijanvdwesz/salon-booking-app",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Vercel"],
  },
  {
    title: "Ticket Sales Web Application",
    description:
      "Event ticketing platform with booking workflow and backend inventory management.",
    image: "images/project-ticket.png",
    liveLink:
      "https://ticket-sales-front-git-e2a741-ijan-van-der-westhuizens-projects.vercel.app/",
    githubLink: "https://github.com/ijanvdwesz/ticket-sales-app",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Credential Management System",
    description:
      "Secure authentication system with role-based dashboards and credential storage.",
    image: "images/project-credential.png",
    liveLink: "https://credential-management-plum.vercel.app/",
    githubLink: "https://github.com/ijanvdwesz/credential-management",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-badges">
                {project.tech.map((tech, idx) => (
                  <span className="badge" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
