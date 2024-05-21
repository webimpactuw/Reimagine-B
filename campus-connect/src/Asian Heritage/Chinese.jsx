import React from 'react'
import '../styles/RSO.css'
import img from '../img/chinese.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Chinese = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Chinese Student Association at the University of Washington</h1>
          </div>
          <div className="description">
          <h3>The Chinese Student Association (CSA) is a Registered Student Organization at the University of Washington. We are an entirely student-led group dedicated towards improving cultural awareness on campus as well as providing support for those who come from a common background.</h3>

          <h3>As the Chinese Student Association at the University of Washington, we are dedicated to encouraging a greater awareness of Chinese culture, cultivating Chinese and Chinese American identity, and promoting a meaningful relationship within the university and the community at large. (No need for membership request, attend our events! See more @csauw) </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4001 E Stevens Way NE</p>
          <p>Seattle, WA 98195 USA</p>
          <p>Contact Email: csauw@uw.edu</p>
          <p>Phone Number: 617-838-4008</p>
          <div className="contact1">
            <a href= "https://www.csauw.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/csauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/CSAUW/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a><img src= {linkedin} alt="linkedin" className="socials" /></a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Chinese