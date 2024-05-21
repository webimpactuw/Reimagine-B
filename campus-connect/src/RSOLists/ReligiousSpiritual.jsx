import React from 'react';
import Bhakti from '../img/BhaktiList.png';
import Yuv from '../img/YUVList.png';
import Sikh from '../img/SikhList.png';
import MSA from '../img/MuslimList.png';
import ListItem from './ListItem';

const ReligiousSpiritualList = () => {
  return (
    <div className="container">
      <h1 className="header">Religious & Spiritual Groups</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={Bhakti} alt={'UW Bhakti Yoga Club'} name={'UW Bhakti Yoga Club'} route={'BhaktiYogaClub'}></ListItem>
      <ListItem img={Yuv} alt={'UW Yuva Raga'} name={'UW Yuva Raga'} route={'YUVAraga'}></ListItem>
      <ListItem img={Sikh} alt={'Sikh Student Association'} name={'Sikh Student Association'} route={'SikhStudentAssociation'}></ListItem>
      <ListItem img={MSA} alt={'Muslim Student Association'} name={'Muslim Student Association'} route={'MuslimStudentAssociation'}></ListItem>
    </div>
  );
}

export default ReligiousSpiritualList;

// alt and name is same 
// img is name
// route is path
