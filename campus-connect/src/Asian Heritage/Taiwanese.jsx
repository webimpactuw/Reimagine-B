import React from 'react'
import '../styles/RSO.css'
import img from '../img/taiwanese.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Taiwanese = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Taiwanese Youth Alliance of Pacific Northwest</h1>
          </div>
          <div className="description">
          <h3>The Taiwanese Youth Alliance Pacific Northwest is a non-commercial union, without any political and religious boundaries, devoted to building a local platform for the Taiwanese youths in the Pacific Northwest. Our goal is to promote Taiwanese culture in America through academically related and career oriented events. In addition, our mission is to collaborate with any youth organizations related to Taiwan in the Pacific Northwest and to facilitate student growth. TYAPN is committed to holding events including but not limited to: Summer internships in Taiwan, interview workshops, volunteer activities, National Taiwanese Double Ten Parade, student bonding activities and field trips to corporations.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4700 Brooklyn AVE NE </p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: tyapn@uw.edu</p>
          <p>Phone Number: 206-928-3598</p>
          <div className="contact1">
            <a href= "https://tyapn.square.site/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/tyapntaiwan/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/tyapn/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/tyapn/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Taiwanese