import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'
import { useParams } from 'react-router-dom';
import Cart from "../../components/Cart/Cart";
import CartMapper from '../../components/CartMapper/CartMapper';

const CartPage = () => {
    const[user_cart, setUser_Cart] = useState([]);
    const[user, token] = useAuth(); 
    console.log('cart page', user_cart)
    console.log('cart page user id', user.id)


    useEffect(() => {
        getCart();
    }, [token]);

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

    function addNewProduct(entry){
        let tempEntries = [...user_cart, entry];
        setUser_Cart(tempEntries);
    }
    
    return ( 
        <>
        {/* <h1>cart page</h1> */}
        <Cart addNewProduct={addNewProduct}/>
        <CartMapper cart={user_cart} getCart={getCart}/>

        </>
     );
}
 
export default CartPage;