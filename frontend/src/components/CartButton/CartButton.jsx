import React from 'react';
import { Link } from 'react-router-dom'

const CartButton = () => {
    function handleSubmit(event){
    
        
    }
    
    return ( 
        <> 
        <Link to={"/cart"}>
        <button onClick={handleSubmit}>
            Add to Cart
        </button>
        </Link>
        </>
     );
}
 
export default CartButton;