import React from 'react'
import {Link} from  'react-router-dom';
import './header.styles.scss'
import {ReactComponent as Logo} from  '../../assets/crown.svg'

const Header = () => (
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
        </div>
    </div>
)

export default Header;