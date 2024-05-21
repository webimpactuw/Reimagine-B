import React from 'react'
import '../styles/RSO.css'
import img from '../img/KappaDelta.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const KappaDelta = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Kappa Delta Chi</h1>
          </div>
          <div className="descriptionKappaDelta">
          <h3>About Kdchi</h3>
          <h3>Kappa Delta Chi Sorority, Incorporated is the strongest network of Latinx leaders in the country. We are Latinx based, but we are not Latinx exclusive. We are a non-traditional Sorority that consists of a diverse set of independent women, who are eager to make a difference in our community. The purpose of Kappa Delta Chi Sorority, Inc. is to promote the traditional values of Unity, Honesty, Integrity and Leadership amongst women. We are dedicated to the service of the University and local community, with a special emphasis on supporting the Hispanic/Latinx population. We pride ourselves in the dedication and passion to the service and advocacy of our local community. </h3>
          <h3>Quick Facts:</h3>
          <div className="listKappaDelta">
          <ul>
            <li>Founding Date: April 6, 1987</li>
            <li>Values: Unity, Honesty, Integrity and Leadership</li>
            <li>Mascot: Penguin</li>
            <li>Colors: Pink and Maroon</li>
            <li>Jewel: Emerald</li>
         </ul>
          </div>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4519 18th Ave NE </p>
          <p>Apt 301</p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: akdphi@uw.edu</p>
          <p>Phone Number: 8084578541</p>
          <div className="contact1">
            <a href= "https://www.kappadeltachi.org/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwkdchi/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/kdchiuw/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/groups/1803088/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default KappaDelta