import React from 'react';
import asa from '../img/asa.png';
import ListItem from './ListItem';

const CulturalFraternityList = () => {
  return (
    <div className="container">
      <h1 className="header">Fraternities & Sororities</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={asa} alt={'African Student Association'} name={'African Student Association'} route={'AfricanStudentAssociation'}></ListItem>
    </div>
  );
}

export default CulturalFraternityList;
