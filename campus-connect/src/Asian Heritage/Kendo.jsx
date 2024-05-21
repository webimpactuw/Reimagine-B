import React from 'react'
import '../styles/RSO.css'
import img from '../img/kendo.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Kendo = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Kendo Club at the University of Washington</h1>
          </div>
          <div className="description">
          <h3>Kendo Club at the University of Washington promotes the study and practice of Japanese swordsmanship. The Kendo Club at University of Washington (UW) is a sports club sponsored by the Department of Recreational Sports Programs. We’re open to currently enrolled UW students and faculty/staff that have purchased a quarterly or annual IMA Membership Card. We are a member dojo of the Pacific Northwest Kendo Federation (KNKF) and the All United States Kendo Federation (AUSKF). Members of the club are eligible to become members in good standing of both federations and are entitled to all privileges of the same. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: IMA</p>
          <p>Contact Email: uwkc@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://sites.uw.edu/uwkc/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/kendo_uw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwkendoclub?fref=ts">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/groups/13979268/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Kendo