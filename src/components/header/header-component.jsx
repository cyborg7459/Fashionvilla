import React from 'react'
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from  '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss'

const Header = ({currentUser}) => {
    return (
    <div className='header'>
        <Link to="/Fashionvilla" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className='options'>
            {/* <p className="option">{props.user.displayName}</p> */}
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
        </div>
    </div>
    )}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);