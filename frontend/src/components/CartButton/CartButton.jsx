import React, { useState, UseEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const CartButton = ({product}) => {
    const[cart, setCart] = useState([]);
    const{productId} = useParams()
    console.log("cart", cart)
    console.log('cart button', product.quantity)

    if(product.quantity === 0){
        return(
            <>
            <h1>Sorry this product is sold out!</h1>
            <Link to={'/waitinglist'}>
                <button onClick={handleSubmit}>
                    Join Waiting list
                </button>
            </Link>
            </>
        );
    }

    function handleSubmit(event){}   
            
    return ( 
        <> 
        <Link  to={`/cart/post/${productId}`}>
        <button onClick={handleSubmit}>
            Add to Cart
        </button>
        </Link>
        </>
     );
}
 
export default CartButton;