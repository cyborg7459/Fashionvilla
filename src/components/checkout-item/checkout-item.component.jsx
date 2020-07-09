import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItemFromCart, addItem, removeSingleItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, removeItem, removeSingleItem, addItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeSingleItem(cartItem)}>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=> removeItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToPRops = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeSingleItem : item => dispatch(removeSingleItem(item))
})

export default connect(null,mapDispatchToPRops)(CheckoutItem);