import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {CheckoutPageContainer, CheckoutHeader, Total, TestWarning} from './checkout.styles';

const CheckoutPage = ({total, cartItems}) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </CheckoutHeader>
        {
            cartItems.map(item => (
                <CheckoutItem key={item.id} cartItem={item} />
            ) )
        } 
        <Total>
            <span>TOTAL : {total}</span>
        </Total>
        <TestWarning>
            *Please use the following test credit card for payments*
            <br>
            </br>
            4242 4242 4242 4242 - Exp : 01/21 - CVV : 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);