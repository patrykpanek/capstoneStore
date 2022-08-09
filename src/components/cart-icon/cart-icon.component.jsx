import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


const CartIcon = () => {
    const { isCartOpen ,setIsCartOpen } = useContext(CartContext);

    

    return (
        <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>10</span>
        </div>
    )
}


export default CartIcon;