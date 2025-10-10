import React from 'react'
import tradehive from "../assets/our-work/trde-hive.png";
import localio from "../assets/our-work/loclio.png";
import resume from "../assets/gautam-resume.pdf"
import { FaExternalLinkAlt } from "react-icons/fa";
import dayga from "../assets/our-work/dayga.png";
import newswise from "../assets/our-work/newswise.png"
import nora from "../assets/our-work/nora.png"
import { useState } from 'react';
const Skills = () => {
  const [activeTab, setActiveTab] = useState("php");

  const projects = [
    {
      id: 1,
      title: "Trade Hive",
      tech: "php",
      img: tradehive,
      link: "https://tradehive.ai/",
      desc: "Trade Hive is an advanced trading platform built using PHP. It provides real-time market data, automated trade execution, and a user-friendly dashboard.",
    },
    {
      id: 2,
      title: "News Wise",
      tech: "php",
      img: newswise,
      link: "https://www.newswise.com/",
      desc: "I worked on the Newswise project using PHP, integrating cURL APIs for data exchange and writing optimized SQL queries to manage and retrieve data efficiently.",
    },
    {
      id: 3,
      title: "Localio",
      tech: "laravel",
      img: localio,
      link: "https://localio.com/en-us",
      desc: "Developed a dynamic web platform using Laravel with clean backend architecture, secure authentication, and efficient data handling.",
    },
    {
      id: 4,
      title: "Deyga",
      tech: "node",
      img: dayga,
      link: "https://deyga.in/",
      desc: "Built an e-commerce platform using Node.js and SQL with RESTful APIs and efficient database management for fast performance.",
    },
    {
      id: 5,
      title: "Nora Garder",
      tech: "laravel",
      img: nora,
      link: "https://noragardner.com/",
      desc: "I built the admin panel myself using Laravel backend — all the functionality, user management, content control, and data handling are powered by the code I wrote.",
    },
  ];
  const filteredProjects = projects.filter((p) => p.tech === activeTab);


  return (
    <>
      {/* skills and experince  */}
      <div className='container-fluid' id='skillsexperinceSection'>
        <div className="container py-5">
          <div className="row">
            {/* Skills Section */}
            <div className="col-md-6">
              <h1 id="skillsexp">
                Skills and <br /> Experience
              </h1>
              <h4 className="mt-4 text-warning">&lt;My Skills/&gt;</h4>

              <div className="skills d-flex flex-wrap">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                  alt="Larvel"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="php"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="VueJs"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                  alt="jQuery"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                  alt="Wordpress"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
                <img
                  src="https://cdn.simpleicons.org/shopify/000000"
                  alt="Shopify"
                />
              </div>
            </div>

            {/* Experience Section */}
            <div className="col-md-6">
              <p className='experince-headiline'><span className="brackets">&lt;</span> Experience <span className="brackets">/&gt;</span></p>

              <div className="experience-item">
                <p className="mb-1">
                  <strong>Oct 2025 - Present</strong>
                </p>
                <div id='second-box'>
                  <h5 className="mb-0">Web Developer</h5>
                  <small>Mohali</small>
                </div>
              </div>
              <div className="experience-item">
                <p className="mb-1">
                  <strong>Jan 2025 - Oct 2025</strong>
                </p>
                <div id='second-box'>
                  <h5 className="mb-0">Web Developer</h5>
                  <small>Jeronone Technology</small>
                </div>
              </div>

              <div className="experience-item">
                <p className="mb-1">
                  <strong>July 2023 - Jan 2025</strong>
                </p>
                <div id='second-box'>
                  <h5 className="mb-0">Web Developer</h5>
                  <small>Cal Info KurukShetra</small>
                </div>
              </div>
              <a className="btn btn-custom mt-4" href={resume} target='_blank'>Get Resume</a>
            </div>
          </div>
        </div>
      </div>


      {/* eduacation start  */}
      {/* education  */}
      <div className='container-fluid mt-5'>
        <section id="education" className='mt-5'>
          <div class="container text-center">
            <h2>Education</h2>
            <div class="row justify-content-center">

              <div class="col-md-4 mb-4">
                <div class="edu-card p-4 h-100">
                  <div class="edu-icon">
                    🎓
                  </div>
                  <h5>Diploma In Computer Science</h5>
                  <p>Seth Jai Parakash Polytechnic</p>
                  <p>2021-2023</p>
                </div>
              </div>

              <div class="col-md-4 mb-4">
                <div class="edu-card p-4 h-100">
                  <div class="edu-icon">
                    🏫
                  </div>
                  <h5>Higher Secondary (12th)</h5>
                  <p>State Board of Haryana (Open Board)</p>
                  <p>2024-2025</p>
                </div>
              </div>

              <div class="col-md-4 mb-4">
                <div class="edu-card p-4 h-100">
                  <div class="edu-icon">
                    📘
                  </div>
                  <h5>Matriculation (10th)</h5>
                  <p>State Board of Haryana</p>
                  <p>2020 – 2021</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>


      {/* education end  */}


      {/* our work section  */}
      <div className="container-fluid">
        <section className="work-section py-5">
          <div className="container">
            <h2 className="text-center mb-3">Our Work</h2>
            <p className="text-center mb-5">
              Every project is a unique endeavor. See what we have accomplished so far!
            </p>

            {/* Tabs */}
            <div className="d-flex justify-content-center mb-4 gap-3">
              <button
                className={`btn ${activeTab === "php" ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => setActiveTab("php")}
              >
                PHP
              </button>
              <button
                className={`btn ${activeTab === "laravel" ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => setActiveTab("laravel")}
              >
                Laravel
              </button>
              <button
                className={`btn ${activeTab === "node" ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => setActiveTab("node")}
              >
                Node.js
              </button>
            </div>

            {/* Project Cards */}
            <div className="row g-4 justify-content-center">
              {filteredProjects.map((project) => (
                <div key={project.id} className="col-md-3">
                  <div className="card h-100 shadow-sm card-hover">
                    <img src={project.img} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.desc}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100 text-black"
                        style={{ backgroundColor: "#ebf5ff", border: "none" }}
                      >
                        Visit Site <FaExternalLinkAlt color="black" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='d-flex justify-content-center'>
          <a
            className="btn btn-primary"
            target='_blank'
            href='https://github.com/GoutamArya15?tab=repositories'
            style={{
              backgroundColor: "#212529",
              border: "none",
            }}
          >
            More Projects
          </a>

        </div>
      </div>
    </>

  )
}

export default Skills