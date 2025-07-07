import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 py-5">
      {/* Upper Section */}
      <div className="row mb-4 p-3">
        {/* Left Text */}
        <div className="col-md-6 mb-4 mb-md-0 p-5">
          <h5 className="poppins-bold mb-4" style={{fontSize:"31px"}}>Never Miss a Hair Beat!</h5>
          <p className="poppins-regular mb-4">Stay updated on hair treatments, offers & expert tips !</p>
          <p className="poppins-regular">
            By signing up, you agree to receive automated marketing texts from Provider Enterprises.
            Consent isn't required for purchase. Msg & data rates may apply. Reply HELP for help, STOP to unsubscribe.
            See our <a href="#" className="text-decoration-underline text-white">Terms</a> & <a href="#" className="text-decoration-underline text-white">Privacy</a>.
          </p>
        </div>

        {/* Right Form */}
        <div className="col-md-6 p-3">
          <form className="p-4 custom-form">
            <div className="mb-4">
              <input
                type="text"
                className="form-control bg-dark text-white border border-secondary"
                placeholder="Name :"
                style={{height:"3rem"}}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control bg-dark text-white border border-secondary "
                placeholder="Mobile no*"
                style={{height:"3rem"}}

              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-light w-50"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white" />

      {/* Lower Section */}
      <div className="row text-start text-md-left p-4 m-3">
        {/* Services */}
        <div className="col-6 col-md">
          <h6 className="poppins-semibold">Services</h6>
          <ul className="list-unstyled poppins-light">
                <li className="footer-item"><a href="#" className="footer-link">Service 1</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Service 2</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Service 3</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Service 4</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-6 col-md">
          <h6 className="poppins-semibold">Support</h6>
          <ul className="list-unstyled poppins-light">
                <li className="footer-item"><a href="#" className="footer-link">Contact us</a></li>
                <li className="footer-item"><a href="#" className="footer-link">FAQ</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Analyze Scalp</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Accessibility</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="col-6 col-md">
          <h6 className="poppins-semibold">About us</h6>
          <ul className="list-unstyled poppins-light">
                <li className="footer-item"><a href="#" className="footer-link">Foundational health</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Clinic Locator</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Careers</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Investors</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-6 col-md">
          <h6 className="poppins-semibold">Legal</h6>
          <ul className="list-unstyled poppins-light">
            <li className="footer-item"><a href="#" className="footer-link">Terms & condition</a></li>
            <li className="footer-item"><a href="#" className="footer-link">Privacy Notes</a></li>
            <li className="footer-item"><a href="#" className="footer-link">Indian consumer Act</a></li>
            <li className="footer-item"><a href="#" className="footer-link">Indian Transparency Act</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="col-12 col-md">
          <h6 className="poppins-semibold">Social</h6>
          <ul className="list-unstyled poppins-light">
            <li className="footer-item"><a href="" className="footer-link">Instagram</a></li>
            <li className="footer-item"><a href="" className="footer-link">Facebook</a></li>
            <li className="footer-item"><a href="" className="footer-link">x</a></li>
            <li className="footer-item"><a href="" className="footer-link" >Youtube</a></li>
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
