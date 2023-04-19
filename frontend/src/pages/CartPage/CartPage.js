import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'
import Cart from "../../components/Cart/Cart";
import CartMapper from '../../components/CartMapper/CartMapper';

const CartPage = () => {
    const[user_cart, setUser_Cart] = useState([]);
    const[user, token] = useAuth(); 

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

    // taking my cart component which posts the newly added product from the cart button and adding it to my user_cart
    // which I then pass to my mapper which will map the newly added product onto the end of my cart
    function addNewProduct(entry){
        let tempEntries = [...user_cart, entry];
        setUser_Cart(tempEntries);
    }
    
    return ( 
        <>
        <Cart addNewProduct={addNewProduct}/>
        <CartMapper cart={user_cart} getCart={getCart}/>
        <Link to='/payment'>
        <button>Check Out</button>
        </Link>

        </>
     );
}
 
export default CartPage;