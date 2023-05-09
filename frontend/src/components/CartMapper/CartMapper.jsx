import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'

const CartMapper = ({ cart, getCart }) => {
    console.log('cart mapper', cart)
    const[user, token] = useAuth()


    async function deleteItem(id) {
        await axios
            .delete(`http://127.0.0.1:8000/cart/${id}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
        console.log('delete item');
        await getCart();
    }
    

    async function putCart(id, index) {
        console.log('put request', cart[index])
        let newQuantity = {
            product: cart[index].product.id,
            user: user.id,
            number: cart[index].number += 1,
            product_id: cart[index].product.id,
            user_id: user.id,
        }
        await axios
        .put(`http://127.0.0.1:8000/cart/${id}/`,newQuantity, {
                headers: {
                    Authorization: "Bearer " + token,
                },
                
            });
        await getCart();
    }
    

    return ( 
        <>
        <table>
        <thead>
            <tr>
            <th >Item Name</th>
            <th >Item Description</th>
            <th >Price</th>
            <th >Quantity</th>
            <th >Item Image</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((el, index) => {
            return (
                <tr key={index}>
                <td>{el.product.name}</td>
                <td>{el.product.description}</td>
                <td>{el.product.price}</td>
                <td>{el.number}</td>
                <td><img src={el.product.image}></img></td>
                {/* <td><button onClick={() => putCart(el.id, index)}>Add Another one</button></td> */}
                <td><button onClick={() => deleteItem(el.id)}>Remove from Cart</button></td>
                </tr>
                
            );
            })}
        </tbody>
        </table>
        </>
        
     );
}
 
export default CartMapper;