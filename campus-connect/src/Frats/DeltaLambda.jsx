import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/DeltaLambda.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const DeltaLambda = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Delta Lambda Phi</h1>
          </div>
          <div className="descriptionDeltaLambda">
            <h3>Mission: The Psi Chapter of Delta Lambda Phi has supported the leadership and development of all Queer (LGBT2QIA+) people and allies on campus since 2004.</h3>
            <h3>Delta Lambda Phi strives to provide a welcoming alternative to traditional Greek life on campus for Queer (LGBT2QIA+) students and allies. As a progressive fraternity, DLP - Psi Chapter works to create an open atmosphere for Queer people to meet, form strong bonds, and develop leadership skills through community service. Additionally, we invite allies to experience and learn the histories of Queer minorities to better serve as advocates when we cannot.</h3>
            <h3>The Three Purposes of Delta Lambda Phi: To develop dignified and purposeful social, service, and recreational activities for all, irrespective of gender identity or sexual orientation. The Founder of Delta Lambda Phi wished to create a place within the fraternal system for gay and progressive men to have the same experience as other men without being singled out for their sexual orientation. Today, we recognize the diversity of sexual and gender identities and welcome all to learn the Lambda Way. Delta Lambda Phi never condones hazing; as such, all of our events seek to show our values and participate as upstanding community members in a safe, comfortable environment.To lead in determining the rights and privileges of individuals in society. This principle goes hand in hand with making our presence known and being a friend to all. Sometimes we, as members of Delta Lambda Phi, must stand up for those around us who can’t speak for themselves. We demonstrate this by ensuring everyone is treated equally and fighting discrimination in all forms, whether on campus, locally, or across the nation. To present a strong and positive image which respects the diversity of all. As members of Delta Lambda Phi, we strive to educate people about cultures, ideologies, and principles they may not otherwise experience. We promote positive images that combat stereotypes, promote diversity in our lives, and fight all forms of discrimination</h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Address: 4294 Little Canoe Channel NE 335</p>
          <p>Seattle, WA 98195</p>
          <p>United States</p>
          <p>Contact Email: psi.chapter@dlp.org</p>
          <p>Phone Number: 7575675093</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a href= "https://www.instagram.com/dlp_psi/">
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a>
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

export default DeltaLambda