import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import CartButton from '../../components/CartButton/CartButton';


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
        <h1>{product.name}</h1>
        <h1>{product.description}</h1>
        <h1>{product.price}</h1>
        <img src={product.image} />
        <CartButton product={product}/>
        </>

        
     );
}
 
export default ProductDetail;




