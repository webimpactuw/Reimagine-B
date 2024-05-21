import React from 'react'
import '../styles/RSO.css'
import img from '../img/LambdaTheta.jpeg';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const LambdaTheta = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img} alt="Logo" className="img" /> {/* Logo image */}
          <h1>Lambda Theta Phi Latin Fraternity, Inc. Delta Mu Chapter</h1>
          </div>
          <div className="description">
          <h3>Lambda Theta Phi Latin Fraternity Inc. is an organization committed to academic excellence, community service, cultural awareness, professionalism, and leadership. Lambda Theta Phi Latin Fraternity Inc. allows for individuals to grow academically and ultimately graduate. Lambda Theta Phi is committed to the professional success of undergraduate brothers and strives to connect these individuals with a career after graduation through our extensive network of brothers. Lambda Theta Phi Latin Fraternity Inc is the first Latino-interest fraternity in the nation founded on December 1st, 1975. Since that day we have been committed to holding up these commitments and establishing a positive culture that promotes brotherhood, unity and success. En La Union Esta La Fuerza!</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 3931 Brooklyn AVE NE</p>
          <p>Seattle, Washington 98105</p>
          <p>Contact Email: seattle_lambdas@yahoo.com</p>
          <p>Phone Number: N/A</p>
          <div className="contact1">
            <a href= "https://thelambdas.org/">
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/lambdas1975/?hl=en">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a href= "https://www.facebook.com/seattlelambdas/?ref=bookmarks">
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a href= "https://www.linkedin.com/company/lambdas1975/">
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default LambdaTheta