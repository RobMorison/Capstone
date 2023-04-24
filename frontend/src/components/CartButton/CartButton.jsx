import React, { useState, UseEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./CartButton.css"


const CartButton = ({product}) => {
    const[cart, setCart] = useState([product]);
    const{productId} = useParams()
    const[user, token] = useAuth();
    console.log('cart button', cart)
    console.log('cart button', user.id)
    console.log('cart button', product)
    
    async function postCart() {
        let newCart = {
            product: product.id,
            user: user.id,
            number: 1,
            product_id: product.id,
            user_id: user.id
        }
        await axios
            .post('http://127.0.0.1:8000/cart/post/',newCart, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                    
                })
            .then((response) => setCart([response.data]))
            .catch((error) => console.error(error));
            
    }
    
    
    function handleSubmit(event){}
    
    if(product.quantity === 0){
        return(
            <>
            <h1>Sorry this product is sold out!</h1>
            <Link to={`/waitinglist/${productId}`}>
                <button onClick={handleSubmit}>
                    Join Waiting list
                </button>
            </Link>
            </>
        );
    }

   
            
    return ( 
        <> 
        <button className="add" onClick={postCart}>
            Add to Cart
        </button>
        <Link to={'/products/'}>
            <button className="keep" onClick={handleSubmit}>Keep Shopping</button>
        </Link>
        <Link to={'/cart/'}>
            <button className="cart" onClick={handleSubmit}>Go to Cart</button>
        </Link>
        </>
     );
}
 
export default CartButton;