import React from 'react'
import {connect} from 'react-redux';
import {ReactComponent as Logo} from  '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

const Header = ({currentUser, isHidden}) => {
    return (
    <HeaderContainer>
        <LogoContainer to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv className='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </OptionDiv>
                :
                <OptionLink className='option' to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon></CartIcon>
        </OptionsContainer>
        {
                isHidden ? null: <CartDropdown/>
        }
    </HeaderContainer>
    )}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);