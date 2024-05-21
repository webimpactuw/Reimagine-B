import React from 'react'
import Explore from '../Explore'
import '../styles/App.css'

const AfricanHeritage = () => {
    return (
        <div className="full-page left african-top">
            <h1 className="subheader">AFRICAN HERITAGE GROUPS</h1>
            <div className="explore">
            <Explore path="/african-heritage" />
            </div>
        </div>
    )
}

export default AfricanHeritage