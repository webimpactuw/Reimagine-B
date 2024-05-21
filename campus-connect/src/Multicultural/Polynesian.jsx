import React from 'react'
import '../styles/RSO.css';
import img from '../img/Polynesian.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Polynesian = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Polynesian Student Alliance</h1>
          </div>
          <div className="description">
          <h3>AIt shall be the purpose of the Polynesian Student Alliance to establish unity amongst those interested and respectful of the Polynesian culture, promote Polynesian cultural identity through song, dance, traditions and customs, and outreach and recruit high school students to preserve and uphold the original purpose of the Polynesian Student Alliance of self-determination, respect, and representation.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: polynzn@uw.edu</p>
          <p>Phone Number:N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/psa_uw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/PolynesianStudentAlliance">
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

export default Polynesian