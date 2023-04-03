import React, { useState, useEffect } from 'react';
import basic from '../assets/basic.JPG';
import axios from "axios"



const BasicBoard = () =>{
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductId();
      },[]);

    async function getProductId() {
        await axios
          .get("http://127.0.0.1:8000/product/1/")
          .then((response) => setProduct(response.data))
          .catch((error) => console.error(error));
            console.log("basicboard component", {product});
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
            <img src={basic} alt="basic" style={{width:390, height:390}}></img>
        </div></>
);
};

export default BasicBoard;