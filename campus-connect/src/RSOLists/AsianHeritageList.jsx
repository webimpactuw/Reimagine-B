import React from 'react';
import ListItem from './ListItem';
import ben from '../img/ben.png';
import chan from '../img/chan.png';
import csa from '../img/csa.png';
import ctc from '../img/ctc.png';

const AsianHeritageList = () => {
  return (
    <div className="container">
      <h1 className="header">AsianHeritage</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={ben} alt={'Bengali Logo'} name={'Bengali Student Association'} ></ListItem>
      <ListItem img={chan} alt={"Chanoyu Club at University of Washington"} name={'Chanoyu Club at University of Washington'} ></ListItem>
      <ListItem img={csa} alt={'Chinese Student Association Logo'} name={'Chinese Student Association'} ></ListItem>
      <ListItem img={ctc} alt={'Chinese Theater Club Logo'} name={'Chinese Theater Club'} ></ListItem>
    </div>
  );
}

export default AsianHeritageList;
