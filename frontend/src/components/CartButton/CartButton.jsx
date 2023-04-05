import React from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CartButton = ({selected_product}) => {
    console.log('cart button', selected_product)
    const{productId} = useParams()
    function handleSubmit(event){}     
        
    return ( 
        <> 
        <Link to={`/cart/post/${productId}`}>
        <button onClick={handleSubmit}>
            Add to Cart
        </button>
        </Link>
        </>
     );
}
 
export default CartButton;