import React from 'react'
import '../styles/RSO.css'
import img from '../img/GammaAlpha.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const GammaAlpha = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Gamma Alpha Omega Sorority, Incorporated</h1>
          </div>
          <div className="description">
          <h3>Gamma Alpha Omega Sorority, Inc., Genuine Gamma chapter was founded on January 24th, 1997 at the University of Washington - Seattle. The UW Gammas are the first Latina Founded Sorority to land on campus and the first in the Pacific Northwest.</h3>
          <h3>We actively seek involvement in our community through cultural, educational, and community outreach programs. We take pride in our year-round community service, but our responsibilities as UW students are equally important. We encourage members to focus on their academics, each member is expected to maintain good academic standing. Gamma Alpha Omega Sorority, Inc. provides a family of lifelong support for sisters who live their lives by the pillars of Honesty, Integrity, Leadership, Scholarship, and Unity.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 3931 Brooklyn Ave NE </p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: gamma@gammaalphaomega.com</p>
          <p>Phone Number: 3609840994</p>
          <div className="contact1">
            <a href= "https://uwgamma.wixsite.com/genuinegammas">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwgao/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/genuinegammasuw">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/gamma-alpha-omega-sorority-inc./">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default GammaAlpha