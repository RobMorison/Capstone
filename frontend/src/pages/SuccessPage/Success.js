import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'
import { useLocation } from "react-router-dom"

const SuccessPage = () => {

    const[user, token] =useAuth()
    const {state} = useLocation()
    const[user_cart, setUser_Cart] = useState([state])

    console.log('success', user_cart)
    console.log('success', user_cart)

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
        
    clear()
        
    function clear() {user_cart.map((el, index) => {
        return(
            deleteItem(index)
            )
            
    })};
    async function deleteItem(index){ 
        console.log(user_cart[index].id)
            await axios
            .delete(`http://127.0.0.1:8000/cart/${user_cart[index].id}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
        }      
        
    
    return ( 
        <h1>Thank you for your purchase!! 🎉</h1>
     );
}
 
export default SuccessPage;