import React, { useEffect } from "react";
import AOS from "aos";

import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Facts from "./components/facts.jsx";
import Skills from "./components/skills.jsx";
import Resume from "./components/resume.jsx";
import Portfolio from "./components/portfolio.jsx";
import Services from "./components/services.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  useEffect(() => {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Back to top button
     */
    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default App;
