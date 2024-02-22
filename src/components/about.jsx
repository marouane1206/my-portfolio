import React from "react";
import profileImage from "../assets/img/profile-img.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Experienced data strategist and marketing research innovator with a
            strong track record of driving data-driven strategies for business
            growth. Adept at developing and implementing data management
            solutions, conducting comprehensive data analysis, and leading
            cross-functional teams. Proven expertise in online marketing
            research, interactive programs, and advanced analytics. Excels in
            leveraging technology and industry best practices to deliver
            actionable insights and achieve organizational objectives.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src={profileImage}
              className="img-profile"
              alt="Marouane Sanhaji"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Data Strategist and Marketing Research Innovator</h3>
            <p className="fst-italic">
              Leveraging my expertise in data analytics and marketing research
              innovation to deliver insights that transform business strategies.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Birthday:</strong> <span>6 Dec 1976</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Website: </strong>
                    <a
                      href="https://github.com/marouane1206"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>https://github.com/marouane1206</span>
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Phone:</strong> <span>+212 064 071 3333</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>City:</strong> <span>Casablanca, Morocco</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Years of Experience:</strong> <span>22</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Degree:</strong>{" "}
                    <span>BS in Management Information Systems</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Email:</strong>{" "}
                    <span>marouane.sanhaji@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Are you ready to unlock the untapped potential of data and
              marketing research to fuel your business growth? Together, we'll
              harness the power of analytics and innovation to uncover hidden
              insights, identify market trends, and develop strategies that
              drive measurable results. Let me help you navigate the
              complexities of data and marketing research, turning insights into
              actionable strategies that elevate your brand and propel your
              business to new heights. Contact me today to embark on a journey
              of data-driven growth and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
