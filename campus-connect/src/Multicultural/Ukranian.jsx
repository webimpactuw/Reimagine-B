import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Ukranian.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Ukranian = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Ukranian Students United at UW</h1>
          </div>
          <div className="description">
          <h3>USU seeks to promote awareness and understanding of the political, historical, economic, and cultural issues of Ukraine from diverse viewpoints.</h3>

          <h3>We are a welcoming community of proud and passionate Ukrainians and students from any background interested in Ukrainian culture! Join us for Ukrainian food, fun movie nights, holiday celebrations, and lots of Ukrainian language practice!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 19146 NE 66th Way </p>
          <p>Redmond, WA 98052 United States</p>
          <p>Contact Email: usuuw@uw.edu</p>
          <p>Phone Number:N/A</p>
          <div className="contact1">
            <a href= "https://linktr.ee/uwukrainians">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uw_ukrainians/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/groups/USUUW/">
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

export default Ukranian