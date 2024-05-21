import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/YUV.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const YUVAraga = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>UW YUVAraga</h1>
          </div>
          <div className="description">
          <h3>Our group’s mission is to promote Indian culture with a focus on classical music and dance. We plan to conduct lecture demonstrations, jam sessions with members, frequent performances by members, and group discussions about our art forms.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 14842 NE 16th St</p>
          <p>Bellevue, WA 98007-4202</p>
          <p>United States</p>
          <p>Contact Email: yuvaraga@uw.edu</p>
          <p>Phone Number: 425-397-1861</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/yuvaraga_uw/">
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

export default YUVAraga