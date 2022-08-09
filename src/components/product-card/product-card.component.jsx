import './product-card.scss';
import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



const ProductCard = ({product})=> {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () =>  addItemToCart(product);


    
    return (
        <div className='product-card-container'>
            <img  src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <button type='button' onClick={addProductToCart}>ADD TO CART</button>
        {/* <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button> */}
        </div>
    )
}

export default ProductCard;