import React from 'react';


const ProductList = ({ products }) => {
    console.log('product list', products)

    return (
        <ul>
            <li>
            {products.map((el) => (
                el.description
            ))}
            </li>
            <li>
            {products.map((el) => (
                el.length
            ))}     
            </li>
        </ul>
    );
}

export default ProductList;