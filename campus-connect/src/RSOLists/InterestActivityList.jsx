import React from 'react';
import Chanoyu from '../img/ChanoyuList.png';
import Salsa from '../img/SalsaList.png';
import PublicHealth from '../img/PublicHealthList.png';
import Taiko from '../img/TaikoList.png';
import Dance from '../img/ChineseDanceList.png';
import ListItem from './ListItem';

const InterestActivityList = () => {
  return (
    <div className="container">
      <h1 className="header">Interest & Activity Groups</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={Chanoyu} alt={'Chanoyu Club at University of Washington'} name={'Chanoyu Club at University of Washington'} route={'ChanoyuClub'}></ListItem>
      <ListItem img={Salsa} alt={'Salsa Club at UW'} name={'Salsa Club at UW'} route={'SalsaClub'}></ListItem>
      <ListItem img={PublicHealth} alt={'Students of Color for Public Health'} name={'Students of Color for Public Health'} route={'StudentsOfColorForPublicHealth'}></ListItem>
      <ListItem img={Taiko} alt={'Taiko Kai'} name={'Taiko Kai'} route={'TaikoKai'}></ListItem>
      <ListItem img={Dance} alt={'Traditional Chinese Dance at the University of Washington'} name={'Traditional Chinese Dance at the University of Washington'} route={'TraditionalChineseDance'}></ListItem>
    </div>
  );
}

export default InterestActivityList;
