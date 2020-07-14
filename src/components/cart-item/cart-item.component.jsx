import React from 'react';
import {CartItemContainer, DisplayImage , ItemDetails, Name} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <DisplayImage src={imageUrl} alt='item' />
        <ItemDetails className='item-details'>
            <Name>{name} </Name>
            <span className='price'>$ {quantity}*{price}</span>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;