import React from 'react'
import '../styles/RSO.css'
import img from '../img/Filipino.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Filipino = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Filipino American Student Association</h1>
          </div>
          <div className="description">
          <h3>FASA sa UW, originally known as Filipino Club, was formed in 1917, when pensionados, or Filipino students, first came to the University of Washington-Seattle. These students created the organization to serve as a social outlet for Filipinos to unite and address socio-political issues that were faced at the time. In 1952, the organization took on the name Fil-Unist instead.</h3>

         <h3>Starting from 1960, Fil-Unist renamed to Filipino Student Association (FSA).  As FSA, we have helped establish the Office of Minority Affairs and Diversity. We also helped create the Ethnic Cultural Center (ECC) and Ethnic Cultural Theater (ECT), along with assisting in building the American Ethnic Studies department. Since 1994, we have been called Filipino American Student Association (FASA) to better reflect the dual-identities of our university’s ever-growing student population. As FASA, we have continued to serve as an outlet for students of similar backgrounds to relate and find community, as well as fought for the representation of Filipinos in the University of Washington academic curriculum. We also have been coined as a Legacy Organization.</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 13931 Brooklyn Ave NE </p>
          <p>Seattle, WA 98105 United States</p>
          <p>Contact Email: fasa@uw.edu</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://www.fasasauw.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/fasasauw/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/fasasauw/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/groups/13647949/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Filipino