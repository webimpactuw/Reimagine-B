import React from 'react'
import '../styles/RSO.css'
import img from '../img/taiwanese.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Korean = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Korean Student Association</h1>
          </div>
          <div className="descriptionKorean">
          <h3>Founded with a passion for celebrating Korean culture and fostering unity, KSA is a dynamic student organization that brings together students from diverse backgrounds to generate community and belonging.</h3>
          <h3>KSA is an integral part of campus life for many, offering a plethora of engaging events, activities, and cultural experiences that showcase the richness and beauty of Korean heritage. Our primary mission is to promote cultural awareness, create lasting friendships, and share the essence of Korea's traditions with the university community.</h3>
           <h3>A membership with KSA entails a variety of benefits; including but not limited to connecting with like-minded people through our events, exclusive discount benefits from participating restaurant and businesses, discounted rates on KSA t-shirts, and more. Being of Korean ethnicity is not a prerequisite to being a member of our association. We welcome students from all walks of life. Whether you are a curious student looking to explore new cultures or have a deep appreciation for Korean heritage, the Korean Student Association warmly welcomes you. Join us in our journey to celebrate Korean culture, cultivate friendships, and promote cross-cultural understanding at UW. Hope to see you soon!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4700 Brooklyn AVE NE </p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: tyapn@uw.edu</p>
          <p>Phone Number: 206-928-3598</p>
          <div className="contact1">
            <a href= "https://tyapn.square.site/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/tyapntaiwan/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/tyapn/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/tyapn/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Korean