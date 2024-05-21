import React from 'react'
import '../styles/RSO.css'
import img from '../img/Lao.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Lao = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Lao Student Association at the University of Washington</h1>
          </div>
          <div className="description">
          <h3>The Lao Student Association at the University of Washington strive to provide a safe and inclusive environment for Lao and non-Lao students alike. We aim to educate others on our rich culture and history, and uplift the voices in our community. Our objective is to encourage Lao students to attend the UW in order to pursue higher education and to provide resources for incoming students and seeking members of the community of all ages. We work to promote togetherness amongst Lao and non-Lao students in order to diminish the gaps and misunderstandings of the culture.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 3931 Brooklyn AVE </p>
          <p>Seattle, WA 98105 USA</p>
          <p>Contact Email: laosa@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://huskylink.washington.edu/organization/laosauw">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/laosa.uw/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/UWLaoStudentAssociation/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/lao-student-association-laosa/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Lao