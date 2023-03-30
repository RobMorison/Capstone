import React from 'react';


const ProductList = ({ products }) => {
    console.log('product list', products)

    return (
        <ul>
            <li>
            {products.map((el) => (
                <img src={el.image} />
            ))}
            </li>
        </ul>
    );
}

export default ProductList;