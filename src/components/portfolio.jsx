import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import GLightbox from "glightbox/dist/js/glightbox.min.js";
import AOS from "aos";

const Portfolio = () => {
  const projects = [
    {
      title: "Bike Share Members Analysis Project",
      image:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img.jpg",
      filter: "filter-python",
      link: "/python/bike_share/",
    },
    {
      title: "911 Calls Analysis Project",
      image:
        "/projects/Python_projects/Emergency_calls/Portfolio_imgs/Emergency_calls_img.jpg",
      filter: "filter-python",
      link: "/python/emergency_calls/",
    },
    {
      title: "Bank Stock Prices Analysis Project",
      image: "/projects/Python_projects/Finance/Portfolio_imgs/Finance_img.jpg",
      filter: "filter-python",
      link: "/python/finance/",
    },
    {
      title: "E-Commerce Customers Analysis Project",
      image:
        "/projects/Python_projects/Ecommerce/Portfolio_imgs/E-commerce_img.jpg",
      filter: "filter-python",
      link: "/python/ecommerce/",
    },
    {
      title: "Advertising Clicks Prediction Project",
      image:
        "/projects/Python_projects/Advertising/Portfolio_imgs/Advertising_img.jpg",
      filter: "filter-python",
      link: "/python/advertising",
    },
    {
      title: "K Nearest Neighbor Project",
      image: "/projects/Python_projects/KNN/Portfolio_imgs/KNN_img.jpg",
      filter: "filter-python",
      link: "/python/knn",
    },
    {
      title: "Loan Payment Prediction Project",
      image:
        "/projects/Python_projects/Loan_payment/Portfolio_imgs/loan_payment_img.jpg",
      filter: "filter-python",
      link: "/python/loanpayment",
    },
    {
      title: "Iris Flower Project",
      image:
        "/projects/Python_projects/Iris_flower/Portfolio_imgs/Iris_flower_img.jpg",
      filter: "filter-python",
      link: "/python/irisflower",
    },
    {
      title: "Universities Project",
      image:
        "/projects/Python_projects/Universities/Portfolio_imgs/Universities_img.jpg",
      filter: "filter-python",
      link: "/python/universities",
    },
    {
      title: "Yelp Project",
      image: "/projects/Python_projects/Yelp/Portfolio_imgs/Yelp_img.jpg",
      filter: "filter-python",
      link: "/python/yelp",
    },
    {
      title: "Banknote Authentication Project",
      image:
        "/projects/Python_projects/Banknote_authentication/Portfolio_imgs/Banknote_authentication_img.jpg",
      filter: "filter-python",
      link: "/python/banknoteauth",
    },
    {
      title: "Survey Form Project",
      image:
        "/projects/Web_projects/Survey_form/Portfolio_imgs/survey_form_img.jpg",
      filter: "filter-web",
      link: "/web/survey",
    },
    {
      title: "Tribute Page Project",
      image: "/projects/Web_projects/Tribute/Portfolio_imgs/Tribute_img.jpg",
      filter: "filter-web",
      link: "/web/tribute",
    },
    {
      title: "Technical Documentation Page Project",
      image:
        "/projects/Web_projects/Technical_documentation/Portfolio_imgs/Technical_documentation_img.jpg",
      filter: "filter-web",
      link: "/web/technicaldocs",
    },
    {
      title: "Product Landing Page Project",
      image:
        "/projects/Web_projects/Landing_page/Portfolio_imgs/Landing_page_img.jpg",
      filter: "filter-web",
      link: "/web/landingpage",
    },
    {
      title: "Personal Portfolio Webpage Project",
      image:
        "/projects/Web_projects/Personal_portfolio/Portfolio_imgs/Personal_portfolio_img.jpg",
      filter: "filter-web",
      link: "/web/personalportfolio",
    },
    {
      title: "Palindrome Checker App",
      image:
        "/projects/Javascript_projects/Palindrome_checker/Portfolio_imgs/Palindrom_checker_img.jpg",
      filter: "filter-java",
      link: "/java/palindrome",
    },
    {
      title: "Roman Numeral Converter App",
      image:
        "/projects/Javascript_projects/Roman_numeral_converter/Portfolio_imgs/Roman_numeral_converter_img.jpg",
      filter: "filter-java",
      link: "/java/romannumeral",
    },
    {
      title: "US Telephone Number Validator App",
      image:
        "/projects/Javascript_projects/Telephone_number_validator/Portfolio_imgs/Telephone_number_validator_img_1.jpg",
      filter: "filter-java",
      link: "/java/telnumbervalidator",
    },
    {
      title: "Cash Register App",
      image:
        "/projects/Javascript_projects/Cash_register/Portfolio_imgs/Cash_register_img_1.jpg",
      filter: "filter-java",
      link: "/java/cashregister",
    },
    {
      title: "Pokémon Search App",
      image:
        "/projects/Javascript_projects/Pokemon_search/Portfolio-imgs/Pokemon_search_img.jpg",
      filter: "filter-java",
      link: "/java/pokemon",
    },
    {
      title: "Random Quote Machine App",
      image:
        "/projects/React_projects/Random_quote/Portfolio_imgs/Random_quote_img.jpg",
      filter: "filter-react",
      link: "/react/quotes",
    },
    {
      title: "Markdown Previewer App",
      image:
        "/projects/React_projects/Markdown_previewer/Portfolio_imgs/Markdown_previewer_img.jpg",
      filter: "filter-react",
      link: "/react/markdownpreview",
    },
    {
      title: "React Drum Machine App",
      image:
        "/projects/React_projects/Drum_machine/Portfolio_imgs/Drum_machine_img.jpg",
      filter: "filter-react",
      link: "/react/drum",
    },
    {
      title: "React Calculator App",
      image:
        "/projects/React_projects/Calculator/Portfolio_imgs/Calculator_img.jpg",
      filter: "filter-react",
      link: "/react/calculator",
    },
    {
      title: "React Pomodoro Clock App",
      image:
        "/projects/React_projects/Pomodoro_clock/Portfolio_imgs/Pomodoro_clock_img.jpg",
      filter: "filter-react",
      link: "/react/pomodoro",
    },
    {
      title: "D3 Bar Chart Visualisation",
      image:
        "/projects/Viz_projects/Bar_Chart/Portfolio_imgs/Bar_Chart_img.jpg",
      filter: "filter-viz",
      link: "/viz/barchart",
    },
    {
      title: "D3 Scatterplot Visualisation",
      image:
        "/projects/Viz_projects/Scatterplot/Portfolio_imgs/Scatterplot_img.jpg",
      filter: "filter-viz",
      link: "/viz/scatterplot",
    },
    {
      title: "D3 Heatmap Visualisation",
      image: "/projects/Viz_projects/Heat_Map/Portfolio_imgs/Heat_Map_img.jpg",
      filter: "filter-viz",
      link: "/viz/heatmap",
    },
    {
      title: "D3 Choropleth Map Visualisation",
      image:
        "/projects/Viz_projects/Choropleth/Portfolio_imgs/Choropleth_img.jpg",
      filter: "filter-viz",
      link: "/viz/choropleth",
    },
    {
      title: "D3 Treemap Diagram Visualisation",
      image: "/projects/Viz_projects/Treemap/Portfolio_imgs/Treemap_img.jpg",
      filter: "filter-viz",
      link: "/viz/treemap",
    },
    {
      title: "Daleo Football App API",
      image: "/projects/Api_projects/Daleo/Portfolio_imgs/daleo_img.png",
      filter: "filter-api",
      link: "/api/daleo",
    },
  ];

  const [filter, setFilter] = useState("*");

  useEffect(() => {
    /**
     * Initialize Isotope and filter portfolio items
     */
    const portfolioContainer = document.querySelector(".portfolio-container");
    let portfolioIsotope;
    let portfolioLightbox;

    if (portfolioContainer) {
      portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      portfolioIsotope.arrange({
        filter: filter,
      });

      AOS.refresh();

      // Initialize lightbox for portfolio images
      portfolioLightbox = GLightbox({
        selector: ".portfolio-lightbox",
      });
    }

    const filterButtons = document.querySelectorAll("#portfolio-filters li");
    filterButtons.forEach((filterButton) => {
      filterButton.addEventListener("click", () => {
        const filterValue = filterButton.getAttribute("data-filter");
        setFilter(filterValue);

        if (portfolioIsotope) {
          portfolioIsotope.arrange({
            filter: filterValue,
          });
          AOS.refresh();
        }
      });
    });

    return () => {
      if (portfolioLightbox) {
        portfolioLightbox.destroy();
      }
    };
  }, [filter]);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Welcome to the portfolio section, where you'll discover my extensive
            experience as a Data Strategist and Marketing Research Innovator.
            Armed with a deep understanding of data analytics, marketing
            research methodologies and development tools, I've helped businesses
            across various industries achieve remarkable success.
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li
                onClick={() => setFilter("*")}
                className={filter === "*" ? "filter-active" : ""}
              >
                All
              </li>
              <li
                onClick={() => setFilter(".filter-python")}
                className={filter === ".filter-python" ? "filter-active" : ""}
              >
                Python
              </li>
              <li
                onClick={() => setFilter(".filter-web")}
                className={filter === ".filter-web" ? "filter-active" : ""}
              >
                HTML/CSS
              </li>
              <li
                onClick={() => setFilter(".filter-java")}
                className={filter === ".filter-java" ? "filter-active" : ""}
              >
                JavaScript
              </li>
              <li
                onClick={() => setFilter(".filter-react")}
                className={filter === ".filter-react" ? "filter-active" : ""}
              >
                React
              </li>
              <li
                onClick={() => setFilter(".filter-viz")}
                className={filter === ".filter-viz" ? "filter-active" : ""}
              >
                Visualization
              </li>
              <li
                onClick={() => setFilter(".filter-api")}
                className={filter === ".filter-api" ? "filter-active" : ""}
              >
                API
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          id="portfolioContainer"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item ${project.filter}`}
            >
              <div className="portfolio-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  className="img-fluid"
                  alt={project.title}
                />
                <div className="portfolio-links">
                  <a
                    href={`${process.env.PUBLIC_URL}${project.image}`}
                    className="portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title={project.title}
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link to={project.link}>
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
