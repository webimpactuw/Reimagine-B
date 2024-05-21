import React from 'react';
import asa from '../img/asa.png';
import ListItem from './ListItem';
import esa from '../img/esa.png';
import osu from '../img/osu.png';
import ssu from '../img/ssu.png';
import sas from '../img/sas.png';

const AfricanHeritageList = () => {
  return (
    <div className="container">
      <h1 className="header">African Heritage Groups</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={asa} alt={'African Student Association'} name={'African Student Association'} route={'AfricanStudentAssociation'}></ListItem>
      <ListItem img={esa} alt={'East African Student Association Logo'} name={'East African Student Association'} route={'EastAfricanStudentAssociation'}></ListItem>
      <ListItem img={osu} alt={'Oromo Student Union Logo'} name={'Oromo Student Union'} route={'OromoStudentUnion'}></ListItem>
      <ListItem img={ssu} alt={'Somali Student Association Logo'} name={'Somali Student Association'} route={'SomaliStudentAssociation'}></ListItem>
      <ListItem img={sas} alt={'Students African Studies Logo'} name={'Students African Studies Association'} route={'AfricanStudentsAssociation'}></ListItem>

    </div>
  );
}

export default AfricanHeritageList;
