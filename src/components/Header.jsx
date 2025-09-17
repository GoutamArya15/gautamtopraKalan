

import React from 'react'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div class="container-fluid mx-3">
                    <a class="navbar-brand" href="#">Gautam Arya</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#skills">Skills & Experience</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#education">Education</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <a class="btn resume-btn" target="_blank" href="PARTY INVITATION.pdf"
                        >Get Resume</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header