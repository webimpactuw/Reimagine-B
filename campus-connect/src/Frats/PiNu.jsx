import React from 'react'
import '../styles/RSO.css'
import img from '../img/PiNu.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const PiNu = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>The Sisterhood of Pi Nu Iota</h1>
          </div>
          <div className="description">
          <h3>The thought of starting a Sisterhood that was geared towards Filipina culture, issues and history started in early 2001. It wasn't until spring of 2005 that the Sisterhood of Pi Nu Iota was officially founded. As a sisterhood, our mission is to provide a strong and supportive space that promotes leadership, diligence and strength within our ladies. Not only do we want to promote a “safe environment” for our sisters, but we also encourage them to further their personal growth through academic excellence, cultural awareness, community service and women empowerment.</h3>
          <h3>Knowledge is power and one of the foundations of being knowledgeable is reading. We proudly promote our philanthropy, children's literacy, as it is our hope that our effort in the community will help improve literacy in kids and give them a chance to maximize their potential.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4519 18th Ave NE </p>
          <p>Apt 301</p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: akdphi@uw.edu</p>
          <p>Phone Number: 8084578541</p>
          <div className="contact1">
            <a href= "https://www.pinuiota.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/pinuiota/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/pinuiota">
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

export default PiNu