import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom'
import CartMapper from '../../components/CartMapper/CartMapper'


const AddToCartPage = () => {
    const[cart, setCart] = useState([]);
    const[user_cart, setUser_Cart] = useState([]);
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
            product_id: product,
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

    async function getCart() {
        await axios
            .get(`http://127.0.0.1:8000/cart/?user_id=${user.id}`, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
            .then((response) => setUser_Cart(response.data))
            .catch((error) => console.error(error));
    }

    function handleSubmit(event){}

    console.log('axios put', cart)
    return ( 
        <>
        <CartMapper cart={cart} getCart={getCart}/>
        <Link to={'/cart/'}>
        <button onClick={handleSubmit}>Go To My Cart</button>
        </Link>
        </>

     );
}
 
export default AddToCartPage;