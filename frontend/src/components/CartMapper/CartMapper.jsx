import React from 'react';

const CartMapper = ({ cart }) => {
    console.log('cart mapper', cart)

    return ( 
        <table className='table'>
        <thead>
            <tr>
            <th>Quantity</th>
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
                <td>1</td>
                <td>{el.product.name}</td>
                <td>{el.product.description}</td>
                <td>{el.product.price}</td>
                <td><img src={el.product.image}></img></td>
                </tr>
            );
            })}
        </tbody>
        </table>
     );
}
 
export default CartMapper;