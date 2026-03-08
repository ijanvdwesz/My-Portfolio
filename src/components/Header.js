import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      <div className="header-container">

        {/* Branding */}
        <div className="logo">
          <img src="/images/IV-logo.png" alt="Logo" className="logo-img" />
          <h1 className="title">Ijan Van der Westhuizen</h1>
        </div>

        {/* Navigation */}
        <nav className="nav">

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
          </div>

          {/* GitHub (desktop only) */}
          <a
            className="github-link"
            href="https://github.com/ijanvdwesz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {/* Mobile Menu Button */}
          <button className="menu-button" onClick={toggleDropdown}>
            ☰
          </button>

          {/* Mobile Dropdown */}
          <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <a href="#projects" onClick={() => setDropdownOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setDropdownOpen(false)}>
              Skills
            </a>
            <a href="#experience" onClick={() => setDropdownOpen(false)}>
              Experience
            </a>
            <a href="#about" onClick={() => setDropdownOpen(false)}>
              About
            </a>

            <hr />

            {/* Download CV Button */}
            <a
              href="/Ijan-CV.pdf"
              download="Ijan-Van-der-Westhuizen-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
              onClick={() => setDropdownOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              {/* Downward arrow in shallow U box */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ verticalAlign: "text-bottom" }}
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

        </nav>
      </div>
    </header>
  );
};

export default Header;