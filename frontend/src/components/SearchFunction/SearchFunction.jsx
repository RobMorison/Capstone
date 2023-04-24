import React, { useState } from 'react';
import "./SearchFunction.css"

const SearchFunction = ({products, setProducts}) => {

    const [searchTerm, setSearchTerm] = useState('');
    console.log(products)

    function handleSubmit(event){
        event.preventDefault();
        searchProduct()
    }

    async function searchProduct(){
        const results = products.filter((product) =>{ 
            if(
                // toString() converts integers in database to strings, have to convert to string because user input is always a string
                // convert to string then can search with the normal include so can search by string and number in search function
                product.name.includes(searchTerm) ||
                product.description.includes(searchTerm) ||
                product.length.toString().includes(searchTerm) ||
                product.width.toString().includes(searchTerm) ||
                product.price.toString().includes(searchTerm)){
                    return true
                }
        })
        setProducts(results)
        console.log('results from search', results)
    }

    return ( 
        <form className="search" onSubmit={handleSubmit}>
            <label></label>
            <input type='text' value={searchTerm} placeholder= 'Search' onChange={(event) => setSearchTerm(event.target.value)}/>
            <button>Search</button>
        </form>
     );
}

export default SearchFunction;