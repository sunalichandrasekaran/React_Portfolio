import React from "react";
import "./Portfolio.css";
import Netflix from "../../Images/project_img1.png";
import Aeroplane from "../../Images/project_img2.png";
import Restaurant from "../../Images/project_img3.png";
import ecommerce from "../../Images/project_img4.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">PROJECTS</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={Netflix} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Netflix Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Netflix</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sunalichandrasekaran/Netflix_Clone"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://beautiful-eclair-0323a6.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Aeroplane} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Flight Booking App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Flight Booking</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sunalichandrasekaran/Airplane_website"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://quiet-stroopwafel-adef05.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Restaurant} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Food Order Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Food Order</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sunalichandrasekaran/RestaurantWebsite-react"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://super-mochi-24aca5.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={ecommerce} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">E-commerce</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Digital Shopping</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sunalichandrasekaran/Ecommerce_website_React"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-primary ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sparkly-melomakarona-bafef9.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
