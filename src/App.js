// Imports necessary dependencies and components
import React from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; // ⭐ NEW
import Header from "./components/Header";
import "./styles/App.css";

// Main App component
const App = () => {
  return (
    <div className="app-container">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Sections */}
      <div className="main-content">

        {/* ⭐ Featured Projects FIRST */}
        <Projects />

        {/* Technical Skills */}
        <Skills />

        {/* Professional Experience */}
        <Experience />

        {/* About Me 
        <About />*/}

      </div>

      {/* Side Navigation / Social Links */}
      <Sidebar />
    </div>
  );
};

export default App;
