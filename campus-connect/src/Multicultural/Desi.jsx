import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Desi.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Desi = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Desi Dhamaka</h1>
          </div>
          <div className="description">
          <h3>Desi Dhamaka is an annual event celebrating South Asian arts and culture in the greater Seattle area. Every year, the show is filled with high energy dances, amazing musical performances, and hilarious skits!</h3>
          <h3>DD began in 2002, to an audience of only 50 people in Kane Hall, through the collaborative efforts of the five South Asian Student organizations: South Asian Student Association, Indian Student Association, Pakistani Student Association, Bengali Student Association, and Sight Beta Rho Fraternity. Within a few years, the show outgrew its location and moved to the prestigious Meany Hall, bringing in audiences from all over the Pacific Northwest.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 19146 NE 66th Way </p>
          <p>Redmond, WA 98052 United States</p>
          <p>Contact Email: dhamaka@uw.edu</p>
          <p>Phone Number: 4256478249</p>
          <div className="contact1">
            <a href= "https://www.desidhamaka.org/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/desidhamaka/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/desi.dhamaka/">
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

export default Desi