import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import AOS from "aos";

import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";

const BikeShare = () => {
  const projectDetails = [
    {
      title: "Bike Share Members Analysis Project",
      projectHtml: "/projects/Python_projects/Bike_share/bike-share.html",
      image:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img.jpg",
      image1:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_1.jpg",
      image2:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_2.png",
      image3:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_3.png",
      image4:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_4.png",
      image5:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_5.png",
      image6:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_6.png",
      image7:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_7.jpg",
      image8:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_8.jpg",
      image9:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_9.jpg",
      image10:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_10.jpg",
      image11:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_11.jpg",
      image12:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_12.jpg",
      image13:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_13.jpg",
      image14:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_14.jpg",
      image15:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_15.jpg",
      image16:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_16.jpg",
      image17:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_17.jpg",
      image18:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_18.jpg",
      image19:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_19.jpg",
      image20:
        "/projects/Python_projects/Bike_share/Portfolio_imgs/Bike_share_img_20.jpg",
      category: "Python: EDA, Geo, KNN and Viz",
      dataSource: "https://divvy-tripdata.s3.amazonaws.com/index.html",
      dataSourceName: "Divvy Trip Data",
      date: "Jan 2024",
      codeRepo: "Kaggle Notebook",
      codeLink:
        "https://www.kaggle.com/code/sanhajimarouane/bike-share-notebook-gda-case-study-1",
      projectDescr:
        "In this data project the focus is to understand how annual members and casual riders use Cyclistic bikes differently, focusing on trip characteristics like type of ride, distance, frequency, time of day, day of week, and station usage.",
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

export default BikeShare;
