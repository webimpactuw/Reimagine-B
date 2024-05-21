import React from 'react'
import '../styles/RSO.css';
import img from '../img/Hui.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Hui = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Hui Hoaloha’Ulana-Hawai’i Club</h1>
          </div>
          <div className="description">
          <h3>Translated as "a group woven together in friendship", Hui Hoaloha ʻUlana weaves lifelong bonds amongst students brought together by their love or interest for Hawaiʻi. We invite everyone from the University of Washington community to participate in various social and cultural events, as well as sharing our aloha spirit in Seattle. If you have any questions, feel free to leave us a message or browse through our website. Mahalo for stopping by!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4220 12th Avenue NE</p>
          <p>Bldg North - Unit 219 - D</p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: skyyoung@uw.edu</p>
          <p>Phone Number: 8083759528</p>
          <div className="contact1">
            <a href= "https://students.washington.edu/ohanauw/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/hawaiiclubatuw/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/groups/uwhawaiiclub/">
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

export default Hui