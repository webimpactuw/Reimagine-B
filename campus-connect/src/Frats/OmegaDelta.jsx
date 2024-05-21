import React from 'react'
import '../styles/RSO.css'
import img from '../img/OmegaDelta.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const OmegaDelta = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Omega Delta Phi Fraternity, Inc. - Lambda Chapter</h1>
          </div>
          <div className="description">
          <h3>The purpose of this Brotherhood, a Service/Social Fraternity dedicated to the needs and concerns of the community, is and shall be to promote and maintain the traditional values of Unity, Honesty, Integrity and Leadership. This Brotherhood was founded in order to provide, to any man, a diverse fraternal experience which coincides with a higher education.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4221 75th Ave Ne  </p>
          <p>Seattle, Washington 98105</p>
          <p>United States</p>
          <p>Contact Email: odphi@uw.edu</p>
          <p>Phone Number: 2535611139</p>
          <div className="contact1">
            <a href= "https://odphiuw.wixsite.com/odphi-uw">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwknights/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/ODPUW/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a>
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default OmegaDelta