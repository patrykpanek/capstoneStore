import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {useNavigate} from 'react-router-dom'

import './cart-dropdown.styles.scss'

import React from 'react'

const CartDropdown = () => {
    const { cartItems,isCartOpen, setIsCartOpen }  = useContext(CartContext);
    const nav = useNavigate();

  const goToCheckout = () => {
    nav('/checkout');
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => (<CartItem cartItem={item} key={item.id}/>))}
        </div>
        <button type="button" onClick={goToCheckout}>CHECKOUT</button>
    </div>
  )
}

export default CartDropdown