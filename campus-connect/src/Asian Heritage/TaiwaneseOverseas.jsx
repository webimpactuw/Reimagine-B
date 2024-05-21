import React from 'react'
import '../styles/RSO.css'
import img from '../img/TaiwaneseOverseas.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const TaiwaneseOverseas = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Taiwanese Student Association at UW</h1>
          </div>
          <div className="description">
          <h3>Taiwanese Overseas Student Association (TOSA) is a non-profit, student-run organization at the University of Washington. Our primary goal is to promote Taiwanese culture and serve undergraduate and graduate students at the University of Washington. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4504 16Ave. NE A103</p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: tosa@uw.edu</p>
          <p>Phone Number: 206-422-6735</p>
          <div className="contact1">
            <a href= "http://www.tosauw.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/tosauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/groups/TOSA.UW/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/taiwanese-overseas-student-association/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default TaiwaneseOverseas