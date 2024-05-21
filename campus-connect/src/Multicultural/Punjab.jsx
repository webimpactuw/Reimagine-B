import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Punjab.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Punjab = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Sher-E-Punjab Society at UW</h1>
          </div>
          <div className="description">
          <h3>Sher-e-Punjab Society UW strives to spread awareness of Punjabi culture. At SPS UW, we aim to create a supportive environment to familiarize UW students with the long-standing history and rich cultural heritage of Punjab. </h3>
          <h3>Through organized events and activities, we hope to present the many aspects of the vibrant Punjabi culture and what makes it unique, while at the same time spreading awareness about the cultural and religious issues that accompany Punjabis in the 21st century..</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4001 E Stevens Way NE</p>
          <p>Seattle, WA 98195</p>
          <p>United States</p>
          <p>Contact Email: sherepunjabuw@gmail.com</p>
          <p>Phone Number: 2062293539</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/spsuw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/SherEPunjabUW">
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

export default Punjab