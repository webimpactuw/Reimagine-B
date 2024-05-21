import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/Somali.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Somali = () => {
    return (
        <div className="page-container">
            <div className="inner-box">
                <div className="left-box">
                    <div className="title">
                        <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
                        <h1>Somali Student Association</h1>
                    </div>
                    <div className="description">
                        <h3>Our mission is to provide a unique experience of history, traditions, and heritage by portraying a clear and concise image of Somalia's rich culture through our events and activities. While building a connection between the Somali students on campus and the larger student body to create a sense of communityÂ where those who share our background can find comfort and those who are curious can find answers. We strive to increase positive knowledge and understanding of the Somali way of life. Most importantly we hope to increase the enrollment of students who are of East-African descent, by the mentoring and walkthroughs of the college application process. We hope to make an impact on our community at the University Of Washington and beyond.</h3>
                    </div>
                </div>
                <div className="line"></div> {/* Line between left and right boxes */}
                <div className="right-box">
                    <h3>Contact Information</h3>
                    <p>Address: 3931 Brooklyn Ave NE</p>
                    <p>Seattle, WA 98105, United States</p>
                    <p>Contact Email: ssauw@uw.edu</p>
                    <p>Phone Number: N/A</p>
                    <div className="contact1">
                        <a>
                            <img src={website} alt="website" className="socials" />
                        </a>
                        <a href="https://www.instagram.com/uw_ssa/">
                            <img src={insta} alt="insta" className="socials" />
                        </a>
                    </div>
                    <div className="contact2">
                        <a href="https://www.facebook.com/ssa.uw">
                            <img src={facebook} alt="facebook" className="socials" />
                        </a>
                        <a>
                            <img src={linkedin} alt="linkedin" className="socials" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Somali