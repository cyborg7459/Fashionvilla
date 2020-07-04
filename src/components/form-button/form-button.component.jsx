import React from 'react';
import './button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...other}) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...other}>
        {children}
    </button>
)

export default CustomButton;