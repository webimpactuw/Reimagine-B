import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/PublicHealth.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const PublicHealth = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Students of Color for Public Health</h1>
          </div>
          <div className="description">
          <h3>Students of Color for Public Health (SCPH) at the University of Washington is dedicated to providing a space for students of color interested in public health. SCPH shall provide personal, professional,  academic, and social support for students passionate about the field. In addition, we strive to promote health within marginalized communities through education and service.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: N/A</p>
          <p>Contact Email: scph@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/scphuw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/scphuw/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/students-of-color-for-public-health/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default PublicHealth
