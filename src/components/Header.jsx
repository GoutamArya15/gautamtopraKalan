import React from "react";
import "../assets/navbar.css";
import resume from "../assets/gautam-resume.pdf";

const Header = () => {
  // ✅ Navbar close function (for mobile)
  const handle_nav = () => {
    const nav = document.getElementById("navbarNav");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show"); // collapse close
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container-fluid mx-2">
          {/* Logo / Brand */}
          <a className="navbar-brand fw-bold" href="#home">
            Gautam Sain
          </a>

          {/* Resume Button (for desktop) */}
          <a
            className="btn resume-btn d-none d-lg-block"
            id="resume2"
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            Get Resume
          </a>

          {/* Navbar Toggle Button (for mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#home" onClick={handle_nav}>
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

            {/* Resume Button (for mobile view) */}
            <a
              className="btn resume-btn d-lg-none mt-3"
              id="resume"
              target="_blank"
              rel="noreferrer"
              href={resume}
              onClick={handle_nav}
            >
              Get Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
