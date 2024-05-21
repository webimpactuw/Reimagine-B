import React from 'react'
import '../styles/RSO.css'
import img from '../img/LambdaThetaAlpha.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const LambdaThetaAlpha = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Lambda Theta Alpha Latin Sorority, Incorporated.</h1>
          </div>
          <div className="description">
          <h3>The purpose of Lambda Theta Alpha shall be to provide a sisterhood based on unity, love, and respect in an effort to foster the development of strong leaders who will then provide and practice political, social, and cultural activities. It shall also be the purpose of Lambda Theta Alpha to promote unity through charitable and educational programs, maintain a higher standard of learning, and serve as a voice for all students. Lambda Theta Alpha’s core values are tied to our commitment to give back to the community. Our Founding Mothers were pioneers of this movement when they devoted our organization to fostering a support group for women in higher education during a time when none existed. We strive to continue working towards the enrichment of marginalized communities and groups by dedicating our time to fundraising and volunteering. It was as a result of this that Lambda Theta Alpha selected St. Jude Children’s Research Hospital as its national philanthropy in January 2010. We hope that in alleviating obstacles and garnering opportunities, our communities will continue to live and thrive.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 232 Husky Union Building 4001 NE  </p>
          <p>Stevens Way Box 35228</p>
          <p>Seattle, Washington 98195</p>
          <p>United States</p>
          <p>United States</p>
          <p>Contact Email: ltago1975@gmail.com</p>
          <p>Phone Number: 253-576-8807</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/lta_gammaomicron/">
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

export default LambdaThetaAlpha