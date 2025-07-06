import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import researchImg from "./resources/reasearch.jpg"; 

const Research = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="container my-5 py-4 px-4 rounded-4 research-container"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0px 0px 50px rgba(255, 72, 72, 0.2)"
      }}
      data-aos="fade-up"
    >
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-3 mb-md-0 text-center">
          <img
            src={researchImg}
            alt="Research discussion"
            className="img-fluid rounded-3"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6 text-center text-md-start research-text">
          <h3 className="poppins-bold" style={{fontSize:"40px"}}>
            Fueled by <br />
            research, crafted <br />
            by experts <span style={{ color: "#000" }}>.</span>
          </h3>
          <p className=" mt-3 poppins-regular" style={{color:"#000"}}>
            Each formula is born from deep science and <br />shaped by our in-house
            cosmetic visionaries — <br />tested, trusted, and tailored with care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;
