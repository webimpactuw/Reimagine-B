import React from 'react'
import '../styles/RSO.css'
import img from '../img/ChiSigma.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Akdphi = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Chi Sigma Alpha National Sorority, Inc.</h1>
          </div>
          <div className="description">
          <h3>Our purpose is to increase Asian-American awareness through service and sisterhood. To bring together diverse women to build strong character, leadership skills, and confidence.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Contact Email: uwchisigmaalpha@gmail.com</p>
          <div className="contact1">
            <a href= "https://www.uwchisigmaalpha.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwchisigs/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwchisigmaalpha/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/chi-sigma-alpha-national-sorority-inc/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Akdphi