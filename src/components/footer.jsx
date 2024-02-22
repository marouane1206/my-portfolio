import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Business Intelligence & Insights</span>
          </strong>
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            href="https://github.com/marouane1206/my-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Marouane Sanhaji
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
