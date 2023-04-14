import React from 'react';
import { useNavigate, Link } from 'react-router-dom'


const ProductList = ({ products }) => {
    console.log('product list', products)
    console.log('product list quantity', products.quantity)


    return (
        <ul>
            {products.map((el) => (
                <div><Link key={el.id} to={`${el.id}`}>
                <img src={el.image} alt="product" />
                </Link>
                <div>{el.name}</div>
                </div>
            ))}
        </ul>
    );
} 

export default ProductList;