import React from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'

const CartMapper = ({ cart, getCart }) => {
    console.log('cart mapper', cart)
    const[user, token] = useAuth()

    const deleteItem = async (id) =>{
        await axios
            .delete(`http://127.0.0.1:8000/cart/${id}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            console.log('delete item')
            await getCart()
    }

    return ( 
        <table className='table'>
        <thead>
            <tr>
            <th>Item Name</th>
            <th>Item Description</th>
            <th>Price</th>
            <th>Item Image</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((el, id) => {
            return (
                <tr key={id}>
                <td>{el.product.name}</td>
                <td>{el.product.description}</td>
                <td>{el.product.price}</td>
                <td><img src={el.product.image}></img></td>
                <td><button onClick={() => deleteItem(el.id)}>Remove from Cart</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
     );
}
 
export default CartMapper;