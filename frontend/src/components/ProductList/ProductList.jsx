import React from 'react';


const ProductList = ({ products }) => {
    console.log('product list', products)

    return (
        <ul>
            <li>
            {products.map((el) => (
                el.description
            ))}
            {products.map((el) => (
            el.length
            ))} 
            {products.map((el) => (
            el.price
            ))}  
            </li>
        </ul>
    );
}

export default ProductList;