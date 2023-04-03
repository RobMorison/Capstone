import React, { useState, useEffect } from 'react';
import brisket from '../assets/brisket.JPG';
import axios from "axios"



const Brisket = () =>{
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductId();
      },[]);

    async function getProductId() {
        await axios
          .get("http://127.0.0.1:8000/product/4/")
          .then((response) => setProduct(response.data))
          .catch((error) => console.error(error));
            console.log("brisket component", {product});
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
            <img src={brisket} alt="brisket" style={{width:390, height:390}}></img>
        </div></>
);
};

export default Brisket;