import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({title, image, size, match, history, linkUrl}) => (
    <div 
        className={`menu-item ${size}`}
        onClick = { () => history.push(`${match.url}/${linkUrl}`)} >
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${image})`
            }} 
        />   
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">BUY NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);