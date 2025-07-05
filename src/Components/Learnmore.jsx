import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hairImage from "./resources/learn-more.jpg"; // replace with actual image path

const Learnmore = () => {
  return (
    <div className="d-flex flex-column flex-md-row border border-primary w-100 m-0 p-0" style={{ borderColor: "#0D6EFD" }} >
      {/* Left Side - Image */}
      <div className="left-img-section w-100 w-md-60">
        <img
          src={hairImage}
          alt="Hair"
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="right-text-section w-100 w-md-40 p-4 border-start border-primary d-flex flex-column justify-content-center" style={{ borderColor: "#0D6EFD" }}>
        <h3 className="poppins-bold" >
          Your Roadmap to <br /> Strong and <br /> Healthy Hair
          <span className="text-dark">.</span>
        </h3>
        <p className="mt-2 text-dark poppins-light">Science at the Root of Every Great Hair Day</p>
        <button className="btn btn-outline-dark custom-button rounded-5">
            Learn more
        </button>
        <div className="poppins-bold" style={{fontSize:"29px"}}>
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
