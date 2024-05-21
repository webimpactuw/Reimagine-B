import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Bhakti.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Bhakti = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>UW Bhakti Yoga Club</h1>
          </div>
          <div className="description">
          <h3>Bhakti Yoga Club is a family for people practicing intentional living, conscious eating & mindful co-existence. We provide a support system for members to develop good personality traits and become leaders through music, meditation & social service.</h3>

          <h3>We at Bhakti Yoga Club want to improve the quality of living of students and faculty by teaching them principles for a stress-free, happy, and meaningful life. We have musical meditation sessions accompanied by traditional instruments and serve delicious vegetarian meals every Thursday in the HUB from 6 PM! We do fun sing-along mantra meditation sessions to go deeper into our consciousness.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: N/A</p>
          <p>Contact Email: bhaktiyoga@uw.edu</p>
          <p>Phone Number: 206-313-7510</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwbhaktiyoga/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/BYCUW">
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

export default Bhakti