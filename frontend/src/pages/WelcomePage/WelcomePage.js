import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";
import SearchFunction from "../../components/SearchFunction/SearchFunction";
import "./WelcomePage.css"


const WelcomePage = () => {
  const [products, setProducts] = useState([]);
  console.log('welcome page', products);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    await axios
      .get("http://127.0.0.1:8000/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
        console.log("getproducts", products);
  }

  return (
    <>
      <h1 className="products"> Our Products</h1>
      <hr className="hr"></hr>
      <div className="search-function">
      <SearchFunction products={products} setProducts={setProducts} />
      </div>
      <div className="product-list">
      <ProductList products={products} />
      </div>
    </>
  );
};

export default WelcomePage;

