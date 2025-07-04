import React from 'react';

export default function Features() {
  return (
    <div className="features-container poppins-light">
      {[
        "Certified Experts",
        "Pain Free Procedure",
        "Post Treatment Support",
        "Proven Methods",
        "Natural Results"
      ].map((text, index) => (
        <div key={index} className="feature-item">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#34ad00">
              <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
            </svg> {text}
          </h3>
        </div>
      ))}
    </div>
  );
}
