import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "./resources/banner1.jpg";
import banner2 from "./resources/banner2.jpg";
import banner3 from "./resources/banner3.jpg";

const Guide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="card h-80 shadow-blue-glow p-4 m-4 rounded-4" data-aos="fade-up">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-3 col-md-12 mb-4 text-center text-lg-start" data-aos="fade-up">
          <h2 className="fw-bold poppins-bold text-dark" style={{ fontSize: "2rem", color: "#000" }}>
            Because <br />
            <span>You’re Unique</span><span className="text-dark">.</span>
          </h2>
          <p className="text-muted lexend-deca">Personalization Works Better</p>
          <a href="#" className="d-inline-flex align-items-center poppins-regular custom-guide-anchor">
            See How &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0D6EFD">
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </a>
        </div>

        {/* Right Section - 3 Cards */}
        <div className="col-lg-9 col-md-12">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white text-center montserrat-alternates-medium">
                  1. Take our Consultation
                </div>
                <img src={banner1} className="card-img-top" alt="Consultation" />
                <div className="card-body">
                  <p className="card-text poppins-light">
                    Begin your journey with a personalized consultation. Our experienced specialists
                    will carefully assess your hair and scalp condition. This helps us craft a treatment
                    plan tailored just for you, ensuring the best results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white text-center montserrat-alternates-medium">
                  2. Decode Your Scalp
                </div>
                <img src={banner2} className="card-img-top" alt="Scalp Analysis" />
                <div className="card-body">
                  <p className="card-text poppins-light">
                    Our team will analyze your scalp and hair condition using advanced diagnostic tools.
                    With accurate insights, we design a personalized treatment plan tailored just for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white text-center montserrat-alternates-medium">
                  3. Treatment Begins
                </div>
                <img src={banner3} className="card-img-top" alt="Treatment" />
                <div className="card-body">
                  <p className="card-text poppins-light">
                    With your customized plan in place, treatment begins. Our clinically proven methods
                    resolve hair concerns. Every session shows visible improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
