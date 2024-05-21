import React from 'react'
import '../styles/RSO.css'
import img from '../img/Vietnamese.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Vietnamese = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Vietnamese Student Association</h1>
          </div>
          <div className="description">
          <h3>The Vietnamese Student Association at the University of Washington (VSAUW) is a cultural, social, and civically engaged Registered Student Organization. Since the 1980s, we've continue to cultivate relationships between students at the University of Washington and the greater Seattle Vietnamese community. We aim to do this by developing the next generation of leaders strive to help the Vietnamese community in Seattle move in a forward direction. VSAUW host events that we believe showcases the Vietnamese heritage and culture, as well as supporting our sister VSAs at other college campuses. We strive to make an impact to our campus and city community by learning, educating, and taking action. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: VSA ECC</p>
          <p>3931 Brooklyn Ave NE Box 355650</p>
          <p>Renton, WA 98059 United States</p>
          <p>Contact Email: vsauw@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://www.vsauw.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/vsauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/VSAUW/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/18422828/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Vietnamese