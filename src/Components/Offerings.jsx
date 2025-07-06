import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMicroscope, FaUserMd, FaClinicMedical, FaUserCog } from "react-icons/fa";

const Offerings = () => {
  return (
    <div className="container py-4 mt-4 mb-4 ">
      <div className="row">
        {/* Top Text */}
        <div className="col-12 mb-4 text-left">
          <h5 className="text-uppercase ibm-plex-sans-devanagari-regular">Only at ProviderEnterprises.com</h5>
        </div>

        {/* Offerings Section */}
        <div className="col-12">
          <div className="row g-3">
            {/* Single Offering Box */}
            {[
              { icon: <FaMicroscope />, text: "Advance hair services" },         // Research/technical focus
              { icon: <FaUserMd />, text: "Experts of team n' doctors" },       // Medical professionals
              { icon: <FaClinicMedical />, text: "Complete hair solution" },    // Full clinical solution
              { icon: <FaUserCog />, text: "Personalized Solution" } 
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: "#F6F4F2" }}>
                  <div className="me-3 fs-4 text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-grow-1 fs-6 fw-medium">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
