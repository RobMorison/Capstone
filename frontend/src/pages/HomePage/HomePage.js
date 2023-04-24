import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import AboutUs from "../AboutUsPage/AboutUs";
import "./HomePage.css"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [home_products, setHome_Products] =useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/product")
        setHome_Products(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchProducts();
  }, [token]);
  return (
    <><div className="welcome">
      <h1>Welcome to Red King Woodworking!</h1>
      <hr className="hr"></hr>
    </div>
    <div className= "section-header">
      <a href="/products">Our Products</a>
        <div className="homepage-products">
              {home_products.map((el) => (
                  <img src={el.image} alt="product"/>
              ))}
        </div>
    <div className= "section-header">
      <a href="/about_us">About Us</a>
      <AboutUs/>
    </div>
    </div></>
      
      // {/* {cars &&
      //   cars.map((car) => (
      //     <p key={car.id}>
      //       {car.year} {car.model} {car.make}
      //     </p>
      //   ))} */}
    
  );
};

export default HomePage;
