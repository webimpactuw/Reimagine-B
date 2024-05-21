import React from 'react'
import '../styles/RSO.css'
import img from '../img/SigmaPsi.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const SigmaPsi = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Sigma Psi Zeta</h1>
          </div>
          <div className="description">
          <h3>Sigma Psi Zeta Sorority, Inc. is a progressive, multicultural Greek Organization that provides a means to success and support for womxn, particularly womxn of color. The sorority builds on the unity of strong and independent leaders to affect change in our organization, our campuses, and our local communities. Sigma Psi Zeta is an official partner of It's On Us, the White House Initiative to end sexual assault on college campuses.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 5241 18th Ave NE, #B </p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: uwsyz@uw.edu</p>
          <p>Phone Number: 808-342-3447</p>
          <div className="contact1">
            <a href= "https://www.uwsyz.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwsyz/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwsyzrho">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/sigma-psi-zeta-sorority-inc./">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default SigmaPsi