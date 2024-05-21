import React from 'react'
import '../styles/RSO.css'
import img from '../img/akdphi.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Akdphi = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>alpha Kappa Delta Phi at UW</h1>
          </div>
          <div className="description">
          <h3>The purpose of this Asian American interest sorority is to promote sisterhood, scholarship, leadership and Asian awareness in the university and community, while encouraging the expression of the individual. The sorority is composed of highly motivated women with diverse backgrounds, interests and fields of study. Each woman, however, shares a strong bond of love, friendship and sisterhood. With a supportive network of sisters, each woman can strive to fulfill her personal, academic and career goals.</h3>
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
            <a href= "https://www.uwakdphi.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uw_akdphi/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwakdphi/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/akdphi/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Akdphi