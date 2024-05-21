import React from 'react'
import Explore from '../Explore'
import '../styles/App.css'

const ReligiousSpiritual = () => {
    return (
        <div className="full-page left religious-top">
            <h1 className="subheader">RELIGIOUS & SPIRITUAL<br></br>GROUPS</h1>
            <div className="explore">
                <Explore path="religious-spiritual"></Explore>
            </div>
        </div>
    )
}

export default ReligiousSpiritual