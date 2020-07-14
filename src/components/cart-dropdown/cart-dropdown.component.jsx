import React from 'react';
import {DropdownContainer, CartItemsContainer, Message, Button} from './cart-dropdown.styles';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <DropdownContainer className='cart-dropdown'>
        <CartItemsContainer>
            {
                cartItems.length?
                cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))
                :
                <Message className='empty-message'>Your Cart is empty</Message>
            }
        </CartItemsContainer>
        <Button onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</Button>
    </DropdownContainer>
);

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));