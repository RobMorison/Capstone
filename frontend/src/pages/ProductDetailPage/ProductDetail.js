import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import CartButton from '../../components/CartButton/CartButton';
import "./ProductDetailPage.css"

const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(productId);
    console.log('product detail page', product)
      

    useEffect(() => {
        getProducts();
      }, []);

    async function getProducts() {
    await axios
        .get(`http://127.0.0.1:8000/product/${productId}/`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.error(error));
        console.log("product detail page get request", product);
    }


    return ( 
        <>
        <section className="products">
            <h1 className="name">
                {product.name}
            </h1>
            <div className="image">
                <img src={product.image} alt="product" />
            </div>
            <div className="description">
                {product.description}
            </div>
            <div className="price">
                ${product.price}
            </div>
            <div className="button">
                <CartButton product={product}/>
            </div>
        </section>
        </>

        
     );
}
 
export default ProductDetail;




