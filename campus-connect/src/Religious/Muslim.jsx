import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/MSA.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Muslim = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>UW Muslim Student Association</h1>
          </div>
          <div className="description">
          <h3>MSA-UW was established in 1968 and today consists of over 150 members, who contribute an array of diverse backgrounds, cultures, and perspectives. The function of the MSA is to provide a supportive and unique Muslim community to our members during our college years. We are an organization run by our student members, and our focus is on community development, service, spiritual growth, and leadership.</h3>

          <h3>MSA strives to build an inclusive atmosphere of brotherhood/sisterhood here on campus, empowering Muslim students as we come together for the sake of Allah and strengthen our faith. We work to make MSA a space for creating lasting friendships as we reach out to the larger community to spread understanding and acceptance. We truly value each and every one of our members – it is you who make the MSA what it is. We hope that you'll become involved in MSA and work with us to make our organization better and better!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>232 Husky Union Building</p>
          <p>Box 352238</p>
          <p>Seattle, WA 98195, Unites States</p>
          <p>Contact Email: msauw@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "http://msauw.org/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/msauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/msauw">
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

export default Muslim