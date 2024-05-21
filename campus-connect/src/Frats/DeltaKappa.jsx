import React from 'react'
import '../styles/RSO.css'
import img from '../img/DeltaKappa.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const DeltaKappa = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Delta Kappa Delta Sorority, Inc.</h1>
          </div>
          <div className="description">
          <h3>Delta Kappa Delta Sorority, Inc. commits itself to the fostering of a united sisterhood, the development of indomitable spirit, the betterment of the community through humanitarian services, and the education of ourselves and others about the Indian sub-continental culture. Furthermore, we dedicate ourselves to personal, cultural enrichment through the awareness and preservation of our traditions and morals.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4000 15th Ave NE  </p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: dkd.uwseattle@gmail.com</p>
          <p>Phone Number:N/A</p>
          <div className="contact1">
            <a href= "https://dkduw.weebly.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/dkd_uw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/dkduw/">
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

export default DeltaKappa