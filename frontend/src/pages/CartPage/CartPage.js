import React, { useState, useEffect } from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';

const CartPage = () => {
    const[cart, setCart] = useState([]);
    const[user, token] = useAuth();
    console.log(cart)
       

    useEffect(() => {
        getCart();
    }, []);

    async function getCart() {
        await axios
            .get("http://127.0.0.1:8000/cart/")
            .then((response) => setCart(response.data))
            .catch((error) => console.error(error));
            console.log('get cart', cart)
    }
    return ( 
        <h1>
            Hello World
        </h1>
     );
}
 
export default CartPage;