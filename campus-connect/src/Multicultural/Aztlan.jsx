import React from 'react'
import '../styles/RSO.css';
import img from '../img/Aztlan.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Aztlan = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Movimiento Estudiantil Chicane de Aztlan</h1>
          </div>
          <div className="description">
          <h3>M.E.Ch.A is committed to advancing the civil and human rights of Latine students on campus and supporting struggles in the community where possible. In M.E.Ch.A meetings and activities, all M.E.Ch.istAs have the right to express their opinions in an atmosphere of respect and cooperation.</h3>

          <h3> We are committed to educating ourselves and the general population on the diversity of our people. We are committed to providing the social and cultural atmosphere needed for students to make a more complete transition to this campus. We are committed to promoting the academic efforts of our students and making higher education a reality for Latine students.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 3931 Brooklyn Ave NE</p>
          <p>Seattle , WA 98105</p>
          <p>Contact Email:  mechadeuws@gmail.com</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uw.mecha/">
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

export default Aztlan