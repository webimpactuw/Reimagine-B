import React from 'react'
import '../styles/RSO.css'
import img from '../img/japanese.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Japanese = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Japanese Student Association</h1>
          </div>
          <div className="description">
          <h3>JSA aims to promote and preserve Japanese culture at the University of Washington by hosting cultural and social events for Japanese students, exchange students, and anyone who appreciates Japanese culture to gather and have a good time! </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4001 E Stevens Way NE</p>
          <p>SAO JSA#36</p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: remikahn@uw.edu</p>
          <p>Phone Number: 4254654275</p>
          <div className="contact1">
            <a href= "https://huskylink.washington.edu/organization/jsa">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/jsauw/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a>
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

export default Japanese