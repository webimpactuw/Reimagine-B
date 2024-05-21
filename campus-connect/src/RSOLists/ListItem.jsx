import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../styles/List.css';
import bookmark from '../img/bookmark.png';
import line from '../img/line.png';

const ListItem = ({ img, alt, name, route }) => {
    return (
        <div>
            <img id="line" src={line} alt="line" className="line" />
            <div className="listItem">
                <div className="imageAndTitle">
                    <img id="asa" src={img} alt={alt} className="itemImage" />
                    <Link to={`/${route}`} className="itemText">{name}</Link>
                </div>
                <img id="bookmark" src={bookmark} alt="bookmark" className="bookmark" />
            </div>
        </div>
    )
}

ListItem.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    routeParam: PropTypes.string.isRequired,
}

export default ListItem