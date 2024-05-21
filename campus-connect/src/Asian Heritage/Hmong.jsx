import React from 'react'
import '../styles/RSO.css'
import img from '../img/Hmong.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Hmong = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Hmong Social Club</h1>
          </div>
          <div className="description">
          <h3>The purpose of the club is to provide a communal connection for Hmong students and the community. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 19146 NE 66th Way </p>
          <p>Redmond, WA 98052 United States</p>
          <p>Contact Email: hmongsocialclub@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://huskylink.washington.edu/organization/hmongsocialclub">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/hsc_uw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
            <a><img src= {facebook} alt="facebook" className="socials" /></a>
              
            <a><img src= {linkedin} alt="linkedin" className="socials" /></a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Hmong