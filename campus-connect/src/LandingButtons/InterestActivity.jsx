import React from 'react'
import Explore from '../Explore'
import '../styles/App.css'

const InterestActivity = () => {
    return (
        <div className="full-page left interest-top">
            <h1 className="subheader">INTEREST &<br></br>ACTIVITY GROUPS</h1>
            <div className="explore">
                <Explore path="/interest-activity"></Explore>
            </div>
        </div>
    )
}

export default InterestActivity