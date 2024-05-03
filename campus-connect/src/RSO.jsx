import React from 'react'
import './styles/RSO.css';
import img from './img/Awaaz logo.png';
import website from './img/social4.png';
import insta from './img/insta.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';

const RSO = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Awaaz at UW</h1>
          </div>
          <div className="description">
          <h3>Awaaz is an a cappella group at the University of Washington which takes musical inspiration from South-Asian and Western cultures and creates harmonious arrangements of all varieties. Founded in 2009 by UW alumni Joyita Banerjee and Pratyusha Banik, Awaaz has followed in the tradition of other fusion a cappella groups while continuing to innovate the genre by incorporating elements from different cultures and media.</h3>

          <h3>From classic Bollywood hits by A.R. Rahman to popular American songs from different genres, we aim to cultivate fusions that provoke emotions of joy and nostalgia, while appealing to audiences of all cultures and musical backgrounds! Anybody with a love and appreciation for music is welcome to join our team.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 19146 NE 66th Way Redmond, WA 98052 United States</p>
          <p>Contact Email: aksh353@uw.edu</p>
          <p>Phone Number: 4254458643</p>
          <div className="contact">
            <a href= "https://uwawaaz.mystrikingly.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwawaaz/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
            <a href= "https://www.facebook.com/UWAwaaz/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/uw-awaaz/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSO