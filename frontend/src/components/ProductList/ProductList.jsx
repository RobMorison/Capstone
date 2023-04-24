import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductList.css"



const ProductList = ({ products }) => {
    console.log('product list', products)
    console.log('product list quantity', products.quantity)


    return (
            <div className="product-card">
                <div className="product-details">{products.map((el) => (
                    <div>
                        <Link key={el.id} to={`${el.id}`}>
                            <img src={el.image} alt="product" />
                        </Link>
                    <div className="product-name">{el.name}</div>
                    </div>
                ))}</div>
                </div>

    );
} 

export default ProductList;