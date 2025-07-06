import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./resources/barber1.jpg"; // Replace with your actual image path
import img2 from "./resources/barber2.jpg"; // Replace with your actual image path

const Reliable = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#F4F4F4",
        borderBottom: "2px solid #D91920",
      }}
    >
      <div className="row d-flex flex-column flex-md-row">
        {/* Left Content */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center p-5"
          data-aos="fade-up"
        >
          <h1 className="poppins-bold" style={{ fontSize: "3.5rem" }}>
            Reliability <br /> That Spans <br /> Continents<span>.</span>
          </h1>
          <p className="mt-3 poppins-regular" style={{ fontSize: "18px", color: "#333" }}>
            The world believes in us — not by chance, <br /> but by choice. From cities to villages, trust <br />travels with our name.
          </p>
        </div>

        {/* Right Images */}
        <div className="col-md-6 d-flex flex-column flex-md-row" data-aos="fade-up">
          {/* Image 1 */}
          <div className="w-100 w-md-50">
            <img
              src={img1}
              alt="Barber cutting hair"
              className="img-fluid h-100"
              style={{ objectFit: "cover", borderRight: "2px solid #fff" }}
            />
          </div>

          {/* Image 2 */}
          <div className="w-100 w-md-50">
            <img
              src={img2}
              alt="Hair trimming closeup"
              className="img-fluid h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reliable;
