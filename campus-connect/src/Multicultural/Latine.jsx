import React from 'react'
import '../styles/RSO.css';
import img from '../img/Latine.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Latine = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Latine Student Union</h1>
          </div>
          <div className="description">
          <h3>The Latine Student Union is committed to building a friendly, supportive and empowering community for Latine students from different cultural and racial backgrounds. We also seek to promote Latine culture and raise awareness of issues within the Latine community through cultural, academic, and social events. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4320 Whitman Lane NE</p>
          <p>Seattle, WA 98195 United States</p>
          <p>Contact Email: lsuudub@gmail.com</p>
          <p>Phone Number:N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwlsu/">
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

export default Latine