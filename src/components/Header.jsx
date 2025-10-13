import React, { useRef } from "react";
import "../assets/navbar.css";
import resume from "../assets/gautam-resume.pdf"

const Header = () => {
  const navListRef = useRef(null);

  const handle_nav = () => {
    if (navListRef.current) {
      navListRef.current.style.display = "none";
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid mx-2">
          <a className="navbar-brand" href="#">
            Gautam Sain
          </a>
          <a className="btn resume-btn" id="resume2" target="_blank" href={resume}>
            Get Resume
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto" ref={navListRef}>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about" onClick={handle_nav}>
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#projects" onClick={handle_nav}>
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#skills" onClick={handle_nav}>
                  Skills & Experience
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#education" onClick={handle_nav}>
                  Education
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact" onClick={handle_nav}>
                  Contact
                </a>
              </li>
            </ul>
            <a className="btn resume-btn" id="resume" target="_blank" href={resume}>
              Get Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
