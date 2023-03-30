import React from 'react';
import { useNavigate, Link } from 'react-router-dom'


const ProductList = ({ products }) => {
    console.log('product list', products)
    const navigate = useNavigate

    return (
        <ul>
            {products.map((el) => (
                <Link key={el.id} to={`${el.id}`}>
                <img src={el.image} />
                </Link>
            ))}
        </ul>
    );
}

export default ProductList;