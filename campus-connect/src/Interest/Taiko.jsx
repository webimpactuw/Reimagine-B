import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Taiko.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Awaaz = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Taiko Kai</h1>
          </div>
          <div className="description">
          <h3>Taiko Kai was founded in 2013 by the Matsudaira sisters, three UW students who wanted to share Japanese culture with UW as well as the greater Seattle community. Since then, we have performed at various campus events such as FIUTS's CulturalFest, TOSA's Timeless Taiwan, and JSA's Matsuri. We have also performed at noteworthy events in the Seattle area like Redmond Lights and Sakura-Con.</h3>

          <h3>Our club focuses on its members, helping them develop personal and team-based performance skills. Our members learn about how to effectively move their bodies and perform for an audience. Our club also builds connections between its members and the Japanese American community, working with other Taiko groups and Japanese events.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: N/A</p>
          <p>Contact Email: uwtaiko@gmail.com</p>
          <p>Phone Number: 4088746737</p>
          <div className="contact1">
            <a href= "https://www.taikokai.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/taikokai/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwtaikokai">
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

export default Awaaz