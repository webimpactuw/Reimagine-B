import React from 'react'
import Multicultural from './LandingButtons/Multicultural'
import AfricanHeritage from './LandingButtons/AfricanHeritage'
import CulturalFraternities from './LandingButtons/CulturalFraternities'
import AsianHeritage from './LandingButtons/AsianHeritage'
import InterestActivity from './LandingButtons/InterestActivity'
import ReligiousSpiritual from './LandingButtons/ReligiousSpiritual'
import './styles/App.css'
import all from './img/ALL VISUAL COMPONENTS.png'

const Landing = () => {
  return (
    <div>
      <div className="full-page">
        <img id="all-visual" src={all} alt="All" />
      </div>
      <Multicultural></Multicultural>
      <AfricanHeritage></AfricanHeritage>
      <AsianHeritage></AsianHeritage>
      <CulturalFraternities></CulturalFraternities>
      <InterestActivity></InterestActivity>
      <ReligiousSpiritual></ReligiousSpiritual>
    </div>
  )
}

export default Landing