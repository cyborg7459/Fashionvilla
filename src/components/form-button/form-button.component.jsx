import React from 'react';
import {CustomStyledButton} from './button.styles';

const CustomButton = ({children, ...props}) => (
    <CustomStyledButton {...props}> {children} </CustomStyledButton>
)

export default CustomButton;