import React, { useState, UseEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'
import CartMapper from '../../components/CartMapper/CartMapper'

const CartButton = () => {
    const[cart, setCart] = useState([]);
    const{productId} = useParams()
    console.log("cart", cart)

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