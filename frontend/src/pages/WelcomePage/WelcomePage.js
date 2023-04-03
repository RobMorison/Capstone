import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";
import SearchFunction from "../../components/SearchFunction/SearchFunction";
import BasicBoard from "../../components/BasicBoard/BasicBoard";

const WelcomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

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

      <SearchFunction products={products} setProducts={setProducts} />
      <ProductList products={products} />
    </>
  );
};

export default WelcomePage;

