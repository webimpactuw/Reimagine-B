import React from 'react'
import '../styles/RSO.css'
import img from '../img/DeltaPi.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const DeltaPi = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Delta Pi Zeta</h1>
          </div>
          <div className="description">
          <h3>Our mission as an Asian Interest Fraternity is to provide a supportive and inclusive brotherhood that empowers our members to develop leadership skills, academic excellence, and a strong sense of cultural identity. We strive to create a welcoming and inclusive environment that fosters personal growth, professional development, and community engagement.</h3>
          <h3>Through our commitment to brotherhood, scholarship, leadership, and service, we aim to promote the values and traditions of Asian cultures, while also addressing the challenges and opportunities facing Asian communities today. We seek to cultivate a sense of pride and awareness of our cultural heritage, as well as a sense of responsibility to give back to our community and support those in need.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>N/A </p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a>
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

export default DeltaPi