import React, { useState, useEffect } from 'react';
import axios from "axios"
import ProductList from '../../components/ProductList/ProductList'

const WelcomePage = () => {
    const[products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])
    console.log('useeffect');

    async function getProducts(){

        await axios
        .get('http://127.0.0.1:8000/product')
        .then(response => setProducts(response.data))
        .catch(error =>console.error(error));
        console.log('getproducts', products)
    }

    return(
        <>
        <h1>Hello World</h1>
        <ProductList products = {products}/></>
    )
}

export default WelcomePage;