import React from 'react'
import '../styles/RSO.css'
import img from '../img/SigmaLambda.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const SigmaLambda = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Sigma Lambda Beta International Fraternity Inc. Phi Beta Chapter</h1>
          </div>
          <div className="description">
          <h3>We strongly believe in fairness, opportunity, and equality for all men no matter what race, culture or ethnicity. We closely adhere to our four principles of Brotherhood, Scholarship, Community Service and Cultural Awareness.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 5019 16th Ave NE</p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: slbuw@uw.edu</p>
          <p>Phone Number: 509-439-8436</p>
          <div className="contact1">
            <a href= "https://www.sigmalambdabeta.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/slbuw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/SLB.PhiBeta/">
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

export default SigmaLambda