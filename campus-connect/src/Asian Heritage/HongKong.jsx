import React from 'react'
import '../styles/RSO.css'
import img from '../img/HongKong.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const HongKong = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Hong Kong Student Association</h1>
          </div>
          <div className="description">
          <h3>Founded in 1984, the Hong Kong Student Association (HKSA) is a student governed, non-profit organization registered at the University of Washington which provides a space for Cantonese students to interact with each other. Not limited to students from Hong Kong, HKSA is inclusive to students from other Cantonese regions including Macau and Guangdong, and any other students regardless of background who are interested in Cantonese culture. HKSA aims to help ease the transition for incoming students into college, encouraging students to involve themselves in university affairs and community, and share Cantonese and Hong Kong culture with all students through events hosted by HKSA.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: Husky Union Building RM </p>
          <p>b277</p>
          <p>Contact Email: hksa@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://huskylink.washington.edu/organization/hksa">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/hksauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/groups/uwhksa/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/hksauw/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default HongKong