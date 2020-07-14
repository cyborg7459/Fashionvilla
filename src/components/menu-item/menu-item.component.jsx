import React from 'react';
import {withRouter} from 'react-router-dom';
import {MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle} from './menu-items.styles'

const MenuItem = ({title, imageUrl, size, match, history, linkUrl}) => {
    let url = match.url;
    if(url[url.length-1]==='/')
        url = url.slice(0,-1);
    return(
        <MenuItemContainer
            className={size}
            onClick = { () => history.push(`${url}/${linkUrl}`)} >
            <BackgroundImageContainer 
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />   
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>BUY NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
};

export default withRouter(MenuItem);