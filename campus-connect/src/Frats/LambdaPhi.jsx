import React from 'react'
import '../styles/RSO.css'
import img from '../img/LambdaPhi.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const LambdaPhi = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Lambda Phi Epsilon</h1>
          </div>
          <div className="description">
          <h3>Lambda Phi Epsilon’s vision is to become the preeminent international Asian interest fraternal organization, providing outstanding leadership, philanthropy, and advocacy in the community.</h3>
          <h3>Alpha Zeta Chapter of Lambda Phi Epsilon (ΛΦΕ, also known as "Lambdas") was founded at the University of Washington on February 14th, 1999. ΛΦΕ is a chartering organization of the UW United Greek Council. ΛΦΕ is the only Asian American interest fraternity to be nationally recognized by the North-American Interfraternity Conference. ΛΦΕ is also the only Asian American interest fraternity established as a nonprofit organization within the State of Washington, and ΛΦΕ is the only Asian American interest fraternity that has an established alumni association within the Pacific Northwest.</h3>
          <h3>Interested in joining our eternal brotherhood? Email us at lambdas@uw.edu for more information or to meet up with our Recruitment Chair. "Like" our Facebook page (http://fb.com/uwlambdas) to stay updated on all of our latest events!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 5036 7th Ave NE </p>
          <p>Seattle, WA 98105</p>
          <p>United States</p>
          <p>Contact Email: lambdas@uw.edu</p>
          <p>Phone Number: 2067436597</p>
          <div className="contact1">
            <a href= "https://uwlambdas.com/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/uwlambdas/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/uwlambdas/">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/lambdaphiepsilon/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default LambdaPhi