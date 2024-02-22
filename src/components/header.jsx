import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/img/profile-img.jpg";
import NavBar from "./navbar";

const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src={profileImage}
            alt="Profile"
            className="img-profile rounded-circle"
          />
          <h1 className="text-light">
            <Link to="/#home" className="nav-link scrollto active">
              Marouane Sanhaji
            </Link>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://www.linkedin.com/in/marouane-sanhaji"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/marouane1206"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.kaggle.com/sanhajimarouane"
              className="kaggle"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-kaggle"></i>
            </a>

            <a
              href="https://codepen.io/marouane1206"
              className="codepen"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>

            <a
              href="https://twitter.com/bii_system"
              className="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
