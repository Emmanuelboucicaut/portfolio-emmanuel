import React from "react";

export function MainMenu() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
      <li className="nav-item">
        <a className="nav-link text-danger" href="index.html">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-danger" href="resume.html">
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-danger" href="projects.html">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-danger" href="contact.html">
          My blogs
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-danger" href="blogs.html">
          Contact
        </a>
      </li>
    </ul>
  );
}
