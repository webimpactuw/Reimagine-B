import React from 'react'
import Explore from '../Explore'
import '../styles/App.css'

const AsianHeritage = () => {
    return (
        <div className="full-page left asian-top">
            <h1 className="subheader">ASIAN HERITAGE GROUPS</h1>
            <div className="explore">
            <Explore path="/asian-heritage" />
            </div>
        </div>
    )
}

export default AsianHeritage