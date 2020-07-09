import React from 'react'
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from  '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser, isHidden}) => {
    return (
    <div className='header'>
        <Link to="/Fashionvilla" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className='options'>
            <Link className="option" to="/Fashionvilla/shop">
                SHOP
            </Link>
            <Link className="option" to="/Fashionvilla/shop">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/Fashionvilla/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon></CartIcon>
        </div>
        {
                isHidden ? null: <CartDropdown/>
        }
    </div>
    )}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);