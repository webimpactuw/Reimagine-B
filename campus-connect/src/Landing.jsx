import React from 'react'
import Multicultural from './Multicultural'
import './styles/App.css'
import all from './img/ALL VISUAL COMPONENTS.png'

const Landing = () => {
  return (
    <div>
      <div className="logo-container full-page">
        <img id="all-visual" src={all} alt="All"/>
        <h2 id="sub-logo">Explore new communities and see what UW has to offer</h2>
      </div>
      <Multicultural></Multicultural>
    </div>
  )
}

export default Landing