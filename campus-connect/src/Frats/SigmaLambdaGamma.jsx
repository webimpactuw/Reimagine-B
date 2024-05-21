import React from 'react'
import '../styles/RSO.css'
import img from '../img/SigmaLambdaGamma.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const SigmaLambdaGamma = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Sigma Lambda Gamma National Sorority, Inc.</h1>
          </div>
          <div className="description">
          <h3>Sigma Lambda Gamma National Sorority, Incorporated, is a multicultural organization. It was originally founded to create a safe space for Latina women. Many of its customs and traditions continue to come from its Latina roots. Since its founding, its scope and appeal as a vibrantly diverse sorority committed to empowering all its members has become a central element of the organization.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: Seattle, WA </p>
          <p>United States</p>
          <p>Contact Email: ygslgpresident@gmail.com</p>
          <p>Phone Number: 5099309641</p>
          <div className="contact1">
            <a href= "https://www.uwgammas.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwgammas/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/seattlegammas/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/groups/14333221/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default SigmaLambdaGamma