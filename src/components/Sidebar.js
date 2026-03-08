import React from "react";
import "../styles/Sidebar.css";
import About from "./About";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      {/* Profile + Contacts + CV at top */}
      <div className="sidebar-top">
        <div className="profile">
          <img
            src="images/me3.jpg"
            alt="Ijan Van der Westhuizen"
            className="profile-img"
          />
          <h2>Ijan Van der Westhuizen</h2>
          <p>Full Stack MERN Developer</p>
        </div>

        <div className="sidebar-links">
          <a
            href="https://github.com/ijanvdwesz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:ijanvdwestz@gmail.com">Email</a>
          <span className="email-note">(ijanvdwestz@gmail.com)</span>

          {/* Download CV button with updated inline SVG */}
          <a
  href="/Ijan-CV.pdf"
  download="Ijan-CV.pdf"
  className="download-btn"
  style={{ display: "flex", alignItems: "center", gap: "6px" }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M6 15c0 0 3 3 6 3s6-3 6-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12 3v12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M9 12l3 3 3-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>

  <span>Download CV</span>
</a>
        </div>
      </div>

      {/* About Section below */}
      <div className="sidebar-about">
        <About />
      </div>
    </aside>
  );
};

export default Sidebar;