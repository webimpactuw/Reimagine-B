import React from 'react'
import '../styles/RSO.css'
import img from '../img/TaiwaneseStudent.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const TaiwaneseStudent = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Taiwanese Student Association at UW</h1>
          </div>
          <div className="description">
          <h3>The Taiwanese Student Association (TSA) is a student organization at the University of Washington dedicated to improving Taiwanese cultural awareness on campus and the Greater Seattle area. </h3>
          <h3>Taiwan means many things to different people. Whether you've been to Taiwan before or have always been interested in Taiwanese culture, come check us out and find out what Taiwan is really all about!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: VSA ECC</p>
          <p>3931 Brooklyn Ave NE Box 355650</p>
          <p>Renton, WA 98059 United States</p>
          <p>Contact Email: vsauw@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "http://www.tsauw.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/tsauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/tsauwseattle/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/tsauw/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default TaiwaneseStudent