import React from 'react';
import ListItem from './ListItem';
import chiSigmaAlpha from '../img/ChiSigma.jpeg';
import chiThetaPsi from '../img/chiThetaPsi.png';
import gammaAlphaOmega from '../img/GammaAlpha.jpeg';
import kappaDeltaChi from '../img/KappaDelta.jpeg';
import lambdaPhiEpsilon from '../img/LambdaPhi.jpeg';
import lambdaThetaAlpha from '../img/LambdaThetaAlpha.jpeg';
import lambdaThetaPhi from '../img/lambdaThetaPhi.png';
import omegaDeltaPhi from '../img/OmegaDelta.jpeg';
import phiBetaSigma from '../img/PiNu.jpeg';
import sigmaLambdaBeta from '../img/SigmaPsi.jpeg';
import sigmaLambdaGamma from '../img/SigmaLambdaGamma.jpeg';
import sigmaPsiZeta from '../img/SigmaPsi.jpeg';
import zetaPhiBeta from '../img/zeta.png';

const CulturalFraternityList = () => {
  return (
    <div className="container">
      <h1 className="header">Fraternities & Sororities</h1>
      <p className="description">
        DESCRIPTION NEEDED
      </p>
      <p className="subheader-list">RSO Title</p>
      <ListItem img={chiSigmaAlpha} alt={'Chi Sigma Alpha National Sorority Incorporated Logo'} name={'Chi Sigma Alpha National Sorority Incorporated'} route={'ChiSigma'}></ListItem>
      <ListItem img={chiThetaPsi} alt={'Chi Theta Psi - Brotherhood Logo'} name={'Chi Theta Psi - Brotherhood'} route={'ChiThetaPsi'}></ListItem>
      <ListItem img={gammaAlphaOmega} alt={'Gamma Alpha Omega Logo'} name={'Gamma Alpha Omega'} route={'GammaAlpha'}></ListItem>
      <ListItem img={kappaDeltaChi} alt={'Kappa Delta Chi Sorority, Incorporated Logo'} name={'Kappa Delta Chi Sorority, Incorporated'} route={'KappaDelta'}></ListItem>
      <ListItem img={lambdaPhiEpsilon} alt={'Lambda Phi Epsilon Logo'} name={'Lambda Phi Epsilon'} route={'LambdaPhi'}></ListItem>
      <ListItem img={lambdaThetaAlpha} alt={'Lambda Theta Alpha Latin Sorority, Inc Logo'} name={'Lambda Theta Alpha Latin Sorority, Inc'} route={'LambdaThetaAlpha'}></ListItem>
      <ListItem img={lambdaThetaPhi} alt={'Lambda Theta Phi Latin Fraternity, Inc. Delta Mu Chapter Logo'} name={'Lambda Theta Phi Latin Fraternity, Inc. Delta Mu Chapter'} route={'LambdaTheta'}></ListItem>
      <ListItem img={omegaDeltaPhi} alt={'Omega Delta Phi Fraternity Logo'} name={'Omega Delta Phi Fraternity'} route={'OmegaDelta'}></ListItem>
      <ListItem img={phiBetaSigma} alt={'Phi Beta Sigma Logo'} name={'Phi Beta Sigma'} route={'PhiBetaSigma'}></ListItem>
      <ListItem img={sigmaLambdaBeta} alt={'Sigma Lambda Beta International Fraternity Incorporated Logo'} name={'Sigma Lambda Beta International Fraternity Incorporated'} route={'SigmaLambdaBeta'}></ListItem>
      <ListItem img={sigmaLambdaGamma} alt={'Sigma Lambda Gamma National Sorority. Inc Logo'} name={'Sigma Lambda Gamma National Sorority. Inc'} route={'SigmaLambdaGamma'}></ListItem>
      <ListItem img={sigmaPsiZeta} alt={'Sigma Psi Zeta Sorority Logo'} name={'Sigma Psi Zeta Sorority'} route={'SigmaPsi'}></ListItem>
      <ListItem img={zetaPhiBeta} alt={'Zeta Phi Beta Sorority Incorporated-Kappa Nu Chapter Logo'} name={'Zeta Phi Beta Sorority Incorporated-Kappa Nu Chapter'} route={'ZetaPhiBeta'}></ListItem>

    </div>
  );
}

export default CulturalFraternityList;
