import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/EastAfrican.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const EastAfrican = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>East African Student Association</h1>
          </div>
          <div className="description">
          <h3>The purpose of the East African Student Association at the University of Washington is to create a safe space to discuss various East African experiences and points relating to communities and countries within the East African boundaries. The East African Student Association is dedicated to building community and hosting events that will allow students to share and celebrate East African cultures and aspects. The East African Student Association is also dedicated to celebrate our similarities rather than our differences. The East African Student Association does not plan on excluding students amongst gender, race, class, sexual orientation etc. The East African Student Association is not exclusive to East African students, and is welcome to all students at the University of Washington.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 19146 NE 66th Way </p>
          <p>Redmond, WA 98052 United States</p>
          <p>Contact Email: aksh353@uw.edu</p>
          <p>Phone Number: 4254458643</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uweasa/">
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

export default EastAfrican