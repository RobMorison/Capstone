import React, { useState, useEffect } from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom'


const Cart = () => {
    const[cart, setCart] = useState([]);
    const[user, token] = useAuth();
    const{productId} = useParams()
    const[product, setProduct] = useState(productId)
    console.log("cart", cart)
       

    useEffect(() => {
        postCart();
    }, [token]);

    async function postCart() {
        let newCart = {
            product: product,
            user: user.id,
            number: 1,
            product_id: product,
            user_id: user.id,
            
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
    console.log('axios post', cart)
    return ( 
        <>
        
        </>

     );
}
 
export default Cart;