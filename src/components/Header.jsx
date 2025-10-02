import React, { useRef } from "react";
import "../assets/navbar.css";

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container-fluid mx-2">
            <a className="navbar-brand" href="#">
              Gautam Arya
            </a>
             <a className="btn resume-btn" id="resume2" target="_blank" href="">
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
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#skills">
                    Skills & Experience
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <a className="btn resume-btn" id="resume" target="_blank" href="">
                Get Resume
              </a>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Header;
