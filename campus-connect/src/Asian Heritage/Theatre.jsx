import React from 'react'
import '../styles/RSO.css'
import img2 from '../img/Theatre.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Theatre = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Chinese Theater Club</h1>
          </div>
          <div className="description">
          <h3>Founded in May 2018, the Chinese Theater Club at University of Washington, known as CTC. We dedicate to create a friendly community for everyone who is interested in theater production and explore the world of drama. Chinese Theater Club focuses mainly on Chinese shows, which have its own unique characteristics. With exposure to both western drama and Chinese drama, students can develop a more diverse view regarding the art of drama across the globe. This is also an ideal place outside the classroom to learn about the art of drama at UW.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: N/A</p>
          <p>Contact Email: ctclub@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwctc18/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwctc?modal=admin_todo_tour">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
          <a href="https://www.linkedin.com/company/uw-chinese-theater-club/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Theatre