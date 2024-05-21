import React from 'react'
import '../styles/RSO.css'
import img from '../img/Indian.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Indian = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Indian Student Association at UW</h1>
          </div>
          <div className="description">
          <h3>The University of Washington's Indian Student Association is a student organization that aims to spread awareness about Indian culture and create a supportive community for our Huskies. The UW is known for its immense diversity and our organization strives to add to this rich culture. We believe we can do this through accurate representation of the Indian community and by reaching out to different individuals and organizations across campus. We also help cultivate a community that supports and encourages its members throughout their college career and beyond.</h3>

          <h3>Every year we grow and create unique events to engage our members. These include club events featuring Bollywood and fusion music, cultural activities such as dance workshops and discussions about cultural identity, and hangouts such as bubble tea gatherings. Starting in 2013, ISA has also paired up with API Chaya, a local domestic violence organization that serves the South Asian community. We hope to continue growing and improving with your support and contributions!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: N/A</p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: uwisa@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://uwisa.weebly.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwisa/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwindians/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
        
            <img src= {linkedin} alt="linkedin" className="socials" />
        
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Indian