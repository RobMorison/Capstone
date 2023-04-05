import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"

const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(productId)
    // console.log('product detail page', productId)
    console.log(product)

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
        </>
        // <ul>
            
        //     {product.map((el) => (
        //         el.product.name
        //     ))}
            
        // </ul>
        // 'hello world'
        
     );
}
 
export default ProductDetail;