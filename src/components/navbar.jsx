import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState();
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5;
      const navbarLinks = document.querySelectorAll("#navbar .scrollto");
      navbarLinks.forEach((navbarLink) => {
        const section = document.querySelector(navbarLink.hash);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition <= section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(navbarLink.hash);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the target section when the page loads with a hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const handleNavLinkClick = (hash) => {
    return (e) => {
      e.preventDefault();
      if (mobileNavActive) {
        setMobileNavActive(false);
      }
      setActiveLink(hash);

      // Update URL and trigger scrolling
      const rootPath = window.location.pathname === "/";
      const newUrl = rootPath ? hash : "/" + hash;
      navigate(newUrl);

      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: "smooth",
        });
      } else {
        // Navigate to the target page and hash using navigate
        navigate("/" + hash); // Use the full hash for navigation
      }
    };
  };

  useEffect(() => {
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const body = document.querySelector("body");
    const handleClick = () => {
      body.classList.toggle("mobile-nav-active");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");
      setMobileNavActive(!mobileNavActive); // Toggle the mobileNavActive state
    };
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener("click", handleClick);
      return () => mobileNavToggle.removeEventListener("click", handleClick);
    }
  }, [mobileNavActive]); // Include mobileNavActive in the dependency array

  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <Link
            to="/#hero"
            className={`nav-link scrollto ${
              activeLink === "#hero" ? "active" : ""
            }`}
            onClick={handleNavLinkClick("#hero")}
          >
            <i className="bx bx-home"></i> <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/#about"
            className={`nav-link scrollto ${
              activeLink === "#about" ? "active" : ""
            }`}
            onClick={handleNavLinkClick("#about")}
          >
            <i className="bx bx-user"></i> <span>About</span>
          </Link>
        </li>

        <li>
          <Link
            to="/#resume"
            className={`nav-link scrollto ${
              activeLink === "#resume" ? "active" : ""
            }`}
            onClick={handleNavLinkClick("#resume")}
          >
            <i className="bx bx-file-blank"></i> <span>Resume</span>
          </Link>
        </li>

        <li>
          <Link
            to="/#portfolio"
            className={`nav-link scrollto ${
              activeLink === "#portfolio" ? "active" : ""
            }`}
            onClick={handleNavLinkClick("#portfolio")}
          >
            <i className="bx bx-book-content"></i> <span>Portfolio</span>
          </Link>
        </li>

        <li>
          <Link
            to="/#services"
            className={`nav-link scrollto ${
              activeLink === "#services" ? "active" : ""
            }`}
            onClick={handleNavLinkClick("#services")}
          >
            <i className="bx bx-server"></i> <span>Services</span>
          </Link>
        </li>

        <li>
          <Link
            to="/#contact"
            className={`nav-link scrollto ${
              activeLink === "#contact" ? "active" : ""
            }`}
            onClick={handleNavLinkClick("#contact")}
          >
            <i className="bx bx-envelope"></i> <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
