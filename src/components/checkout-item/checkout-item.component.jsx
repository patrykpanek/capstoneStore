import './checkout-item.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import React from 'react'

const CheckoutItem = ({cartItem}) => {
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const {name,imageUrl, price,quantity} = cartItem;
  return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={()=> removeItemFromCart(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={()=> addItemToCart(cartItem)}>&#10095;</div>        
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=> clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}


export default CheckoutItem;