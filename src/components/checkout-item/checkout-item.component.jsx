import React from 'react';
import {CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton}  from './checkout-item.styles';
import {connect} from 'react-redux';
import {removeItemFromCart, addItem, removeSingleItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, removeItem, removeSingleItem, addItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <Image src={imageUrl} alt="item"/>
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={() => removeSingleItem(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={()=> addItem(cartItem)}>&#10095;</Arrow>
        </Quantity>
        <Price>{price}</Price>
        <RemoveButton onClick={()=> removeItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)}

const mapDispatchToPRops = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeSingleItem : item => dispatch(removeSingleItem(item))
})

export default connect(null,mapDispatchToPRops)(CheckoutItem);