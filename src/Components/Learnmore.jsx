import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hairImage from "./resources/learn-more.jpg"; // replace with actual image path

const Learnmore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="d-flex flex-column flex-md-row border w-100 mt-2 mb-2 p-0"
      style={{ borderColor: "#0D6EFD", borderWidth: "1px", borderStyle: "solid" }}
    >
      {/* Left Side - Image */}
      <div className="left-img-section w-100 w-md-60" >
        <img
          src={hairImage}
          alt="Hair"
          className="img-fluid w-100 h-100 object-fit-cover"
          data-aos="fade-up"
        />
      </div>

      {/* Right Side - Text */}
      <div
        className="right-text-section w-100 w-md-40 p-4 d-flex flex-column justify-content-center"
        style={{
          borderLeft: "1px solid #0D6EFD",
        }}
        
      >
        <h3 className="poppins-bold" data-aos="fade-up">
          Your Roadmap to <br /> Strong and <br /> Healthy Hair
          <span className="text-dark">.</span>
        </h3>
        <p className="mt-2 text-dark poppins-light" data-aos="fade-up">
          Science at the Root of Every Great Hair Day
        </p>
        <button className="btn btn-outline-dark custom-button rounded-5" data-aos="fade-up">
          Learn more
        </button>
        <div className="poppins-bold" style={{ fontSize: "29px" }} data-aos="fade-up">
          <p className="fw-bold m-0">Stronger Strands</p>
          <p className="fw-bold m-0">Glossy Shine</p>
          <p className="fw-bold m-0">Frizz-Free Smoothness</p>
          <p className="fw-bold m-0">Soft, Hydrated Feel</p>
          <p className="fw-bold m-0">Shape That Stays</p>
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
