import React from 'react'
import '../styles/RSO.css'
import img from '../img/Khmer.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Khmer = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Khmer Student Association</h1>
          </div>
          <div className="description">
          <h3>The Khmer Student Association at the University of Washington is an organization that was formed in order to foster academic and professional success among Khmer students in their college careers. Our pillars of education, community, social justice, and cultural pride manifest in our work to uplift and protect Khmer culture - empowering youth to embrace their identities and enact change while simultaneously developing appreciation and respect for our rich heritage - build solidarity with other underrepresented groups, as well as inspire and support Khmer Americans to pursue higher education, particularly at the University of Washington.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 3931 Brooklyn Ave N  </p>
          <p>Office #304 Seattle, WA 98105</p>
          <p>Contact Email: khmer@uw.edu</p>
          <p>Phone Number: 571-699-5010</p>
          <div className="contact1">
            <a href= "https://students.washington.edu/khmer/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/wwukhsa/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/wwukhsa/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/khsauw/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Khmer