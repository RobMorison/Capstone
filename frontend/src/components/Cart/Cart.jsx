import React, { useState, useEffect } from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom'


const CartPage = ({selected_product}) => {
    const[cart, setCart] = useState([]);
    const[user, token] = useAuth();
    const{productId} = useParams()
    const[product, setProduct] = useState(productId)
    console.log(cart)
    console.log(user.id)    
    console.log(product)
    console.log("selected product", selected_product)
       

    useEffect(() => {
        postCart();
    }, [token]);

    async function getCart() {
        await axios
            .get('http://127.0.0.1:8000/cart/')
            .then((response) => setCart(response.data))
            .catch((error) => console.error(error));
            console.log('get cart', cart)
    }

    async function postCart() {
        let newCart = {
            product: product,
            user: user.id
        }
        await axios
            .post('http://127.0.0.1:8000/cart/post/',newCart, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                    
                })
            .then((response) => setCart(response.data))
            .catch((error) => console.error(error));
    }
    return ( 
        <ul>
            <li>
                {cart.id}
            </li>
            <li>
                {cart.product}
            </li>
            <li>   
                {cart.user}
            </li>
        </ul>
       

     );
}
 
export default CartPage;