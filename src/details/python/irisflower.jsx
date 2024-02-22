import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";

import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";

const IrisFlower = () => {
  const projectDetails = [
    {
      title: "Iris Flower Project",
      projectHtml:
        "/projects/Python_projects/Iris_flower/Iris-flower-notebook.html",
      image:
        "/projects/Python_projects/Iris_flower/Portfolio_imgs/Iris_flower_img.jpg",
      image1:
        "/projects/Python_projects/Iris_flower/Portfolio_imgs/Iris_flower_img_1.png",
      image2:
        "/projects/Python_projects/Iris_flower/Portfolio_imgs/Iris_flower_img_2.png",
      category: "Python: Support Vector Machines",
      dataSource: "https://en.wikipedia.org/wiki/Iris_flower_data_set",
      dataSourceName: "Iris flower data set",
      date: "Jan 2024",
      codeRepo: "Github repository",
      codeLink:
        "https://github.com/marouane1206/python-for-data-science-and-machine-learning-bootcamp/tree/master/Iris-flower-Project",
      projectDescr:
        "The Iris flower data set or Fisher's Iris data set is a multivariate data set introduced by Sir Ronald Fisher in the 1936 as an example of discriminant analysis. The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris versicolor), so 150 total samples. Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main id="main">
        {projectDetails.map((project, index) => (
          <section key={index} id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>{project.title}</h2>
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a
                      href={`${process.env.PUBLIC_URL}${project.projectHtml}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        ))}
        {projectDetails.map((project, index) => (
          <section
            key={index}
            id="portfolio-details"
            className="portfolio-details"
          >
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-8" data-aos="fade-up">
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <Swiper
                        spaceBetween={5}
                        slidesPerView={1}
                        centeredSlides={true}
                        speed={400}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        pagination={{ clickable: true }}
                      >
                        {/* Render project images */}
                        {[...Array(20).keys()].map((i) => {
                          const imageKey = `image${i + 1}`;
                          return (
                            project[imageKey] && (
                              <SwiperSlide className="swiper-slide" key={i}>
                                <img
                                  src={`${process.env.PUBLIC_URL}${project[imageKey]}`}
                                  alt={project.title}
                                />
                              </SwiperSlide>
                            )
                          );
                        })}
                      </Swiper>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="portfolio-info" data-aos="fade-up">
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Category: </strong>
                        {project.category}
                      </li>
                      <li>
                        <strong>Data Source: </strong>
                        <a
                          href={project.dataSource}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.dataSourceName}
                        </a>
                      </li>
                      <li>
                        <strong>Project date: </strong>
                        {project.date}
                      </li>
                      <li>
                        <strong>Project URL: </strong>
                        <a
                          href={`${process.env.PUBLIC_URL}${project.projectHtml}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.title}
                        </a>
                      </li>
                      <li>
                        <strong>{project.codeRepo}: </strong>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.codeRepo}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description" data-aos="fade-up">
                    <h2>{project.title}</h2>
                    <p>{project.projectDescr}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default IrisFlower;
