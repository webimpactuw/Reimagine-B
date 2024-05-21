import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/ChineseDance.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const ChineseDance = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Traditional Chinese Dance at UW</h1>
          </div>
          <div className="description">
          <h3>The purpose of Traditional Chinese Dance at the University of Washington (TCDUW) is to build a community of passionate dancers by providing an inclusive, supporting, and energizing environment for students to learn diverse ethnic Chinese dance styles. TCDUW aims to spread Chinese culture in the UW and Seattle communities through various performances, events, and workshops. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 1521 102nd Avenue </p>
          <p>Northeast, Bellevue, WA 98004</p>
          <p>United States</p>
          <p>Contact Email: tcduw@uw.edu</p>
          <p>Phone Number: 415-306-2317</p>
          <div className="contact1">
            <a href= "https://tcdanceuw.wixsite.com/website">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/tcduw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a>
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/traditional-chinese-dance-at-uw/about/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default ChineseDance