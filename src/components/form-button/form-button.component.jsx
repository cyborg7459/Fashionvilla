import React from 'react';
import './button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...other}) => (
    <button className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...other}>
        {children}
    </button>
)

export default CustomButton;