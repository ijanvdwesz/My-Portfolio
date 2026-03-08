import React, { useState } from "react";
import "../styles/Experience.css";

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (job) => {
    setExpandedJob((prev) => (prev === job ? null : job));
  };

  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      {/* SPROSENS */}
      <div className="job">
        <h3 onClick={() => toggleJob("sprosens")}>
          Technician — Sprosens (2023 – Present)
          <span>{expandedJob === "sperosens" ? " ▲" : " ▼"}</span>
        </h3>

        {expandedJob === "sperosens" && (
          <ul>
            <li>Installed telemetry and fire detection systems</li>
            <li>Configured fire suppression and safety monitoring systems</li>
            <li>Ensured compliance with safety regulations and industry standards</li>
            <li>Diagnosed and resolved complex technical system faults</li>
            <li>Worked with integrated hardware and monitoring platforms</li>
          </ul>
        )}
      </div>

      {/* ROOSEVELT ACADEMY */}
      <div className="job">
        <h3 onClick={() => toggleJob("academy")}>
          Educator — Roosevelt Academy (2020 – 2021)
          <span>{expandedJob === "academy" ? " ▲" : " ▼"}</span>
        </h3>

        {expandedJob === "academy" && (
          <ul>
            <li>Delivered structured training content and lesson planning</li>
            <li>Managed scheduling and curriculum development</li>
            <li>Developed strong communication and presentation skills</li>
            <li>Worked in structured learning and performance tracking environments</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Experience;
