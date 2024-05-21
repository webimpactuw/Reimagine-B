import React from 'react'
import Explore from '../Explore'
import '../styles/App.css'

const CulturalFraternities = () => {
    return (
        <div className="full-page left cult-top">
            <h1 className="subheader">CULTURAL FRATERNITIES<br></br>& SORORITIES</h1>
            <div className="explore">
            <Explore path="/cultural-fraternity" />
            </div>
        </div>
    )
}

export default CulturalFraternities