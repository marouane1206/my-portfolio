import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";

const Facts = () => {
  const [countUpInView, setCountUpInView] = useState({
    count1: false,
    count2: false,
    count3: false,
    count4: false,
  });

  const handleEnterViewport = (countName) => {
    setCountUpInView((prevState) => ({
      ...prevState,
      [countName]: true,
    }));
  };

  const handleLeaveViewport = (countName) => {
    setCountUpInView((prevState) => ({
      ...prevState,
      [countName]: false,
    }));
  };

  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <Waypoint
              onEnter={() => handleEnterViewport("count1")}
              onLeave={() => handleLeaveViewport("count1")}
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                {countUpInView.count1 && (
                  <CountUp
                    end={232}
                    duration={1}
                    prefix=""
                    decimals={0}
                    className="purecounter"
                  />
                )}
                <p>
                  <strong>Happy Clients</strong>
                  <br />
                  Such as L'Oreal, Emirates Airlines, General Motors...
                </p>
              </div>
            </Waypoint>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <Waypoint
              onEnter={() => handleEnterViewport("count2")}
              onLeave={() => handleLeaveViewport("count2")}
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                {countUpInView.count2 && (
                  <CountUp
                    end={521}
                    duration={1}
                    prefix=""
                    decimals={0}
                    className="purecounter"
                  />
                )}
                <p>
                  <strong>Projects</strong>
                  <br />
                  In various industries such as FMCG, Telecom, Hospitality,
                  Governement...
                </p>
              </div>
            </Waypoint>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <Waypoint
              onEnter={() => handleEnterViewport("count3")}
              onLeave={() => handleLeaveViewport("count3")}
            >
              <div className="count-box">
                <i className="bi bi-headset"></i>
                {countUpInView.count3 && (
                  <CountUp
                    end={1453}
                    duration={1}
                    prefix=""
                    decimals={0}
                    className="purecounter"
                  />
                )}
                <p>
                  <strong>Hours Of Training</strong>
                  <br />
                  In the latest technologies and tools such as Machine Learning,
                  AI, Python...
                </p>
              </div>
            </Waypoint>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <Waypoint
              onEnter={() => handleEnterViewport("count4")}
              onLeave={() => handleLeaveViewport("count4")}
            >
              <div className="count-box">
                <i className="bi bi-people"></i>
                {countUpInView.count4 && (
                  <CountUp
                    end={22}
                    duration={1}
                    prefix=""
                    decimals={0}
                    className="purecounter"
                  />
                )}
                <p>
                  <strong>Years of Experience</strong>
                  <br />
                  With different multinational companies such Ipsos, Yahoo!,
                  Kantar ...
                </p>
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
