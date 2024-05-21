import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Sikh.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Awaaz = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Sikh Student Association</h1>
          </div>
          <div className="description">
          <h3>Sikh Student Association is a student based organization whose mission is to educate both Sikh and non-Sikhs on campus all while promoting main tenets of Sikhism, including community service, equality, and interfaith dialogue. Sikh Student Association also works to create a safe space on campus for students who identify as Sikh and/or want to learn about the Sikh faith. SSA also encourages education regarding Sikh history, The Sikh Scripture, and supportive resources such as mental health, physical health, family and friend support, academic advising support and more.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: N/A </p>
          <p>Contact Email: uwsikhs@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/ssa_uw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/SikhStudentAssocationUW/">
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

export default Awaaz