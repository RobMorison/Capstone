import React, { useState, useEffect } from 'react';
import large_basic from '../assets/large_basic.JPG';
import axios from "axios"



const LargeBasic = () =>{
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductId();
      },[]);

    async function getProductId() {
        await axios
          .get("http://127.0.0.1:8000/product/3/")
          .then((response) => setProduct(response.data))
          .catch((error) => console.error(error));
            console.log("largebasic component", {product});
      }



    return(
        <>
        <h1>
            {product.name}
        </h1>
        <div>
            <h4>
                {product.description}
            </h4>
            <h4>
                {product.price}
            </h4>

        </div>
        <div>
            <img src={large_basic} alt="large basic" style={{width:390, height:390}}></img>
        </div></>
);
};

export default LargeBasic;