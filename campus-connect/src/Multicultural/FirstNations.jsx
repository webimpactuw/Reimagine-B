import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/FirstNations.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const FirstNations = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>First Nations at UW</h1>
          </div>
          <div className="description">
          <h3>First Nations at the University of Washington is one of the largest Native American and Alaska Native student organizations on campus. We host events both on- and off-campus with the intention of educating the community about Native cultures, spreading awareness to issues affecting the Native community and upholding our respective customs and traditions.</h3>
          <h3>We are known for our annual spring powwow which brings together Natives from across the United States and Canada for this special event. </h3>
          <h3>The entire community, both Native and non-Native, stands to benefit from the work we do because Native visibility and cultural mindedness are important and crucial to our progression into a more open-minded and accepting society.  </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: Samuel E. Kelly Ethnic </p>
          <p>Cultural Center 221 </p>
          <p>Redmond, WA 98052 United States</p>
          <p>Contact Email: fnuw@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://sites.uw.edu/fnuw/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/firstnationsuw/">
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

export default FirstNations