import React from 'react';
import { Link } from 'react-router-dom'

const CartButton = () => {

    const goToCart = () => {
        <>
        <Link key={''} to={'/cart'}></Link>
        </>
    }

    return ( 
        <>
        <button onClick={() => goToCart}>
            Add to Cart
        </button>
        </>
     );
}
 
export default CartButton;