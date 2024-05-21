import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Explore.css';

const Explore = ({ path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <button className="explore-btn" onClick={handleClick}>EXPLORE</button>
    );
}

export default Explore;
