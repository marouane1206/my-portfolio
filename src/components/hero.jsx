import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedElement = useRef(null); // Create a ref to hold the element

  useEffect(() => {
    // Ensure the element exists before initializing Typed
    if (typedElement.current) {
      const options = {
        strings: ["Researcher", "Data Analyst", "Developer", "Freelancer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      };

      const typed = new Typed(typedElement.current, options);

      return () => typed.destroy(); // Clean up on unmount
    }
  }, [typedElement]); // Include typedElement in the dependency array

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Marouane Sanhaji</h1>
        <p>
          I'm a <span ref={typedElement} className="typed"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
