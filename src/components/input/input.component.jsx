import React from 'react';
import {GroupContainer, FormInputContainer, FormInputLabel} from './input.styles';

const Input = ({handleChange, label, ...other}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...other} />
        {
            label?
            (<FormInputLabel>
                {label}
            </FormInputLabel>) : null
        }
    </GroupContainer>
)

export default Input;