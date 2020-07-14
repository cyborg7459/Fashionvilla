import styled, {css} from 'styled-components';

const GoogleButtonStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`

const InvertedButtonStyles = css`
    background-color: white;
    color: black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`

const BaseButtonStyles = css`
    background-color: black;
    color: white;
    
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`

const setButtonStyle = props => {
    if(props.isGoogleSignIn)
        return GoogleButtonStyles;
    return (props.inverted)?(InvertedButtonStyles):(BaseButtonStyles);
}

export const CustomStyledButton = styled.div`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${setButtonStyle}
`