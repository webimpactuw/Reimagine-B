import React from 'react'
import '../styles/RSO.css'
import img from '../img/Bengali.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Bengali = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Bengali Student Association</h1>
          </div>
          <div className="description">
          <h3>Bengali Student Association is an organization aiming to connect students of Bengali and non-Bengali ethnicity and encourage community.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 1410 NE Campus Parkway</p>
          <p>Seattle , WA 98195 USA</p>
          <p>Contact Email: bengali@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/bsa.uw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/bsa.udub/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
              <img src= {linkedin} alt="linkedin" className="socials" />
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Bengali