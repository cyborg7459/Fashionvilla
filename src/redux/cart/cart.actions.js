import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item
})

export const removeSingleItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})