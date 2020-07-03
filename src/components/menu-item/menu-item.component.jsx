import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({title, image, size, match, history, linkUrl}) => {
    let url = match.url;
    console.log(url);
    if(url[url.length-1]==='/')
        url = url.slice(0,-1);
    return(
        <div 
            className={`menu-item ${size}`}
            onClick = { () => history.push(`${url}/${linkUrl}`)} >
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
    )
};

export default withRouter(MenuItem);