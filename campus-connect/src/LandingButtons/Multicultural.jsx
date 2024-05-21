import React from 'react'
import Explore from '../Explore'
import '../styles/App.css'

const Multicultural = () => {
    return (
        <div className="full-page special-top left">
            <h1 className="subheader">MULTICULTURAL<br></br>RSO'S</h1>
            <div className="explore">
            <Explore path="/multicultural"></Explore>
            </div>
        </div>
    )
}

export default Multicultural