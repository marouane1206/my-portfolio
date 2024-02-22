import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

const Skills = () => {
  const skills = [
    { name: "Python", value: 100 },
    { name: "Tableau", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "SQL", value: 80 },
    { name: "API development", value: 90 },
    { name: "Machine Learning", value: 55 },
  ];

  const [inView, setInView] = useState(false);

  const handleEnterViewport = () => {
    setInView(true);
  };

  const handleLeaveViewport = () => {
    setInView(false);
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            As a Data Strategist and Marketing Research Innovator, I possess a
            unique blend of technical expertise and strategic thinking, enabling
            me to extract meaningful insights from data and translate them into
            actionable strategies that drive business growth. My proficiency in
            data analytics tools, coupled with my in-depth knowledge of
            marketing research methodologies, empowers me to uncover hidden
            patterns, identify emerging trends, and assess competitor
            strategies. Whether it's analyzing customer behavior, measuring
            campaign performance, or evaluating market opportunities, I can
            effectively leverage data to inform strategic decisions that
            maximize ROI and propel your business forward.
          </p>
        </div>

        <div className="row skills-content">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="progress">
                <span className="skill">
                  {skill.name} <i className="val">{skill.value}%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={inView ? skill.value : 0}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${inView ? skill.value : 0}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Waypoint
        onEnter={handleEnterViewport}
        onLeave={handleLeaveViewport}
        Offset="80%"
      />
    </section>
  );
};

export default Skills;
