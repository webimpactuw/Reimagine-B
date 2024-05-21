import React from 'react';
import ListItem from './ListItem';
import ben from '../img/ben.png';
import chan from '../img/chan.png';
import csa from '../img/csa.png';
import ctc from '../img/ctc.png';
import fasa from '../img/fasa.png';
import hmongsocial from '../img/hmongsocial.png';
import hksa from '../img/hksa.png';
import isa from '../img/isa.png';
import jsa from '../img/jsa.png';
import khmer from '../img/khmer.png';
import ksa from '../img/ksa.png';
import kendo from '../img/kendo.png';
import lao from '../img/lao.png';
import toa from '../img/toa.png';
import tsa from '../img/tsa.png';
import tyapn from '../img/tyapn.png';
import vsa from '../img/vsa.png';

const AsianHeritageList = () => {
  return (
    <div className="container">
      <h1 className="header">AsianHeritage</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={ben} alt={'Bengali Logo'} name={'Bengali Student Association'} route={'Bengali'}></ListItem>
      <ListItem img={chan} alt={"Chanoyu Club at University of Washington"} name={'Chanoyu Club at University of Washington'} route={'ChanoyuClub'}></ListItem>
      <ListItem img={csa} alt={'Chinese Student Association Logo'} name={'Chinese Student Association'} route={'Chinese'}></ListItem>
      <ListItem img={ctc} alt={'Chinese Theater Club Logo'} name={'Chinese Theater Club'} route={'ChineseTheaterClub'}></ListItem>
      <ListItem img={fasa} alt={'Filipino American Student Association Logo'} name={'Filipino American Student Association'} route={'Filipino'}></ListItem>
      <ListItem img={hmongsocial} alt={'Hmong Social Club Logo'} name={'Hmong Social Club'} route={'Hmong'}></ListItem>
      <ListItem img={hksa} alt={'Hong Kong Student Association Logo'} name={'Hong Kong Student Association'} route={'HongKong'}></ListItem>
      <ListItem img={isa} alt={'Indian Student Association Logo'} name={'Indian Student Association'} route={'Indian'}></ListItem>
      <ListItem img={jsa} alt={'Japanese Student Association Logo'} name={'Japanese Student Association'} route={'Japanese'}></ListItem>
      <ListItem img={khmer} alt={'Khmer Student Association Logo'} name={'Khmer Student Association'} route={'Khmer'}></ListItem>
      <ListItem img={ksa} alt={'Korean Student Association Logo'} name={'Korean Student Association'} route={'Korean'}></ListItem>
      <ListItem img={kendo} alt={'Kendo Club Logo'} name={'Kendo Club'} route={'Kendo'}></ListItem>
      <ListItem img={lao} alt={'Lao Student Association Logo'} name={'Lao Student Association'} route={'Lao'}></ListItem>
      <ListItem img={toa} alt={'Taiwanese Overseas Association Logo'} name={'Taiwanese Overseas Association'} route={'Taiwanese_Overseas'}></ListItem>
      <ListItem img={tsa} alt={'Taiwanese Student Association Logo'} name={'Taiwanese Student Association'} route={'TaiwaneseStudent'}></ListItem>
      <ListItem img={tyapn} alt={'Taiwanese Youth Alliance of the Pacific Northwest Logo'} name={'Taiwanese Youth Alliance of the Pacific Northwest'} route={'Taiwanese'}></ListItem>
      <ListItem img={vsa} alt={'Vietnamese Student Association Logo'} name={'Vietnamese Student Association'} route={'Vietnamese'}></ListItem>
    </div>
  );
}

export default AsianHeritageList;
