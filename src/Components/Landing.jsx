import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className='landing-body'>
      <div className="landing-text">
        <p className='poppins-light' style={{ fontSize: "22px" }} data-aos="fade-right">
          www.providerenterprises.in
        </p>
        <h2 className='poppins-bold' style={{ fontSize: "70px" }} data-aos="fade-right">
          2x Volume. <br /> 2x Strength.
        </h2>
        <br />
        <h3 className='lexend-deca' style={{ fontSize: "22px" }} data-aos="fade-right">
          For Confidence that begins <br /> at the Scalp.
        </h3>
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          style={{ borderRadius: "18px", fontSize: "20px" }}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
          </svg>{' '}
          Get started
        </button>
      </div>
    </div>
  );
}
