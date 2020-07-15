import React from 'react';
import {GroupContainer, FormInputContainer, FormInputLabel} from './input.styles';

const Input = ({handleChange, label, ...other}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...other} />
        {
            label?
            (<FormInputLabel className="form-input-label">
                {label}
            </FormInputLabel>) : null
        }
    </GroupContainer>
)

export default Input;