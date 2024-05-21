import React from 'react'
import '../styles/RSO.css'
import img from '../img/ChiDelta.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const ChiDelta = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>The Lovely Sisterhood of Chi Delta Sigma Sorority, Incorporated (Inc.)</h1>
          </div>
          <div className="description">
          <h3>The purpose of the Lovely Sisterhood of Chi Delta Sigma Sorority, Incorporated is to: provide a support group for those in need of sisterhood; shape their true characters; give them a foundation for personal growth; and bring guidance in academic excellence.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: Seattle, WA</p>
          <p>Contact Email: akdphi@uw.edu</p>
          <p>Phone Number: 8084578541</p>
          <div className="contact1">
            <a href= "http://www.uwmgc.com/chi-delta-sigma.html">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/chidsiguw/">
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

export default ChiDelta