import React from 'react';
import ListItem from './ListItem';
import awaaz from '../img/awaaz.png';
import csa from '../img/csa.png';
import bsu from '../img/bsu.png';
import lsu from '../img/lsu.png';
import dd from '../img/dd.png';
import fnu from '../img/fnu.png';
import hui from '../img/hui.png';
import kahaani from '../img/kahaani.png';
import mic from '../img/mic.png';
import mecha from '../img/mecha.png';
import psa from '../img/psa.png';
import punjabi from '../img/punjabi.png';
import usu from '../img/usu.png';

const MulticulturalList = () => {
  return (
    <div className="container">
      <h1 className="header">Multicultural RSOs</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={awaaz} alt={'Awaaz Logo'} name={'Awaaz at UW'} ></ListItem>
      <ListItem img={csa} alt={'Chinese Student Association Logo'} name={'Chinese Student Association'} ></ListItem>
      <ListItem img={bsu} alt={'Black Student Union Logo'} name={'Black Student Union'} ></ListItem>
      <ListItem img={lsu} alt={'Latine Student Union Logo'} name={'Latine Student Union'} ></ListItem>
      <ListItem img={dd} alt={'Desi Dhamaka Logo'} name={'Desi Dhamaka'} ></ListItem>
      <ListItem img={fnu} alt={'First Nations Logo'} name={'First Nations at UW'} ></ListItem>
      <ListItem img={hui} alt={'Hui Hoaloha’Ulana-Hawai’i Club Logo'} name={'Hui Hoaloha’Ulana-Hawai’i Club'} ></ListItem>
      <ListItem img={kahaani} alt={'Kahaani Logo'} name={'Kahaani'} ></ListItem>
      <ListItem img={mic} alt={'Micronesian Islands Club (MIC)'} name={'Micronesian Islands Club (MIC)'} ></ListItem>
      <ListItem img={mecha} alt={'Movimiento Estudiantil Chicano de Aztlán Logo'} name={'Movimiento Estudiantil Chicane de Aztlán(M.E.Ch.A)'} ></ListItem>
      <ListItem img={psa} alt={'Polynesian Student Association Logo'} name={'Polynesian Student Association'} ></ListItem>
      <ListItem img={punjabi} alt={'Sher-E-Punjab Society at University of Washington Logo'} name={'Sher-E-Punjab Society at University of Washington'} ></ListItem>
      <ListItem img={usu} alt={'Ukrainian Students United at University of Washington Logo'} name={'Ukrainian Students United at University of Washington'} ></ListItem>
    </div>
  );
}

export default MulticulturalList;
