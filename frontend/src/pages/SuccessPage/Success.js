import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'
import { useLocation } from "react-router-dom"

const SuccessPage = () => {

    const[user, token] =useAuth()
    const {state} = useLocation()
    const[user_cart, setUser_Cart] = useState([state])

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
            .catch((error) => console.error(error))
    }

    // async function deleteCart()
    //     await axios
    //         .delete(`http://127.0.0.1:8000/cart/${el.id}/`, {
    //             headers: {
    //                 Authorization: "Bearer " + token,
    //             },
    //         })
    // async function deleteCart() {
    //     await axios
    //         .delete(`http://127.0.0.1:8000/cart/${user_cart.id}/`, {
    //             headers: {
    //             Authorization: "Bearer " + token,
    //              },
    //             });
    //     console.log('delete item');
    //     await getCart();
    //     }
    
    

//     
    
    return ( 
        <h1>Thank you for your purchase!! 🎉</h1>
     );
}
 
export default SuccessPage;